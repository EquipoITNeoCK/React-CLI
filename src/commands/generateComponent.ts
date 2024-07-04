import fs from "fs-extra";
import path from "path";
import { formatComponentName, formatDirectoryName } from "../utils/formatUtils";

export function generateComponent(name: string) {
  const formattedName = formatComponentName(name);
  const formattedDir = formatDirectoryName(name);
  let componentDir = path.join(process.cwd(), formattedDir);

  if (!process.cwd().includes(path.join("src"))) {
    componentDir = path.join(process.cwd(), "src", formattedDir);
  }

  fs.ensureDirSync(componentDir);

  generateComponentTsx(formattedName, componentDir);
  generateComponentStyles(formattedName, componentDir);
}

function generateComponentTsx(componentName: string, componentDir: string) {
  const componentTsx = `import {} from './${componentName}.styles';
export default function ${componentName}() {
  return (
    <>${componentName}</>
  );
};`;

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    componentTsx
  );
}

function generateComponentStyles(componentName: string, componentDir: string) {
  const componentStyles = `import {styled} from '@mui/material';`;

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.styles.ts`),
    componentStyles
  );
}
