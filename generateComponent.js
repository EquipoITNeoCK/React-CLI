import fs from "fs-extra";
import path from "path";
import { formatComponentName, formatDirectoryName } from "./formatUtils.js";

export function generateComponent(name) {
  const formattedName = formatComponentName(name);
  const formattedDir = formatDirectoryName(name);
  const componentDir = path.join(process.cwd(), "src", formattedDir);

  fs.ensureDirSync(componentDir);

  generateComponentTsx(formattedName, componentDir);
  generateComponentStyles(formattedName, componentDir);
}

function generateComponentTsx(componentName, componentDir) {
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

function generateComponentStyles(componentName, componentDir) {
  const componentStyles = `import {styled} from '@mui/material';`;

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.styles.ts`),
    componentStyles
  );
}
