import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";
import {
  formatComponentName,
  formatDirectoryName,
  formatFileName,
} from "../utils/formatUtils.js";
import { select } from "@inquirer/prompts";

export async function generateComponent(name: string) {
  const formatedFileName = formatFileName(name);
  const formatedComponentName = formatComponentName(name);
  const formattedDir = formatDirectoryName(name);

  let componentDir = path.join(process.cwd(), formattedDir);

  if (!process.cwd().includes(path.join("src"))) {
    componentDir = path.join(process.cwd(), "src", formattedDir);
  }

  const stylesFileInputType = await select<string>({
    message: "¿Que tipo de fichero de estilos quieres?",
    choices: ["plain css", "css modules", "mui styles"],
  });

  fs.ensureDirSync(componentDir);

  generateComponentTsx(formatedComponentName, componentDir, formatedFileName);

  generateComponentStyles(formatedFileName, componentDir, stylesFileInputType);
}

function generateComponentTsx(
  componentName: string,
  componentDir: string,
  fileName: string
) {
  const componentTsx = `function ${componentName}() {
  return (
    <div>${componentName}</div>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join(componentDir, `${fileName}.tsx`), componentTsx);
  consoleCreated(`${fileName}.tsx`);
}

function generateComponentStyles(
  componentName: string,
  componentDir: string,
  fileType: string
) {
  let fileExtension = "";
  let componentText = "";

  switch (fileType) {
    case "plain css":
      fileExtension = ".css";
      break;
    case "css modules":
      fileExtension = ".module.css";
      break;
    case "mui styles":
      fileExtension = ".styles.ts";
      componentText = `import { styled } from '@mui/material';`;
      break;
  }

  fs.writeFileSync(
    path.join(componentDir, `${componentName}${fileExtension}`),
    componentText
  );

  consoleCreated(`${componentName}${fileExtension}`);
}
