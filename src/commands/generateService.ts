import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "../utils/formatUtils.js";
import consoleCreated from "../utils/console-created.js";

export function generateService(name: string) {
  const formattedName = formatServiceName(name);
  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  let serviceDir = process.cwd();

  if (!serviceDir.includes(path.join("src"))) {
    serviceDir = path.join(serviceDir, "src");
  }

  const serviceTemplate = `
class ${upperCase}Service {}

export default ${upperCase}Service;
`;

  fs.writeFileSync(
    path.join(serviceDir, `${formattedName}.service.ts`),
    serviceTemplate
  );

  consoleCreated(`${formattedName}.service.ts`);
}
