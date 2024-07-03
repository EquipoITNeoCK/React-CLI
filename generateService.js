import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "./formatUtils.js";

export function generateService(name) {
  const formattedName = formatServiceName(name);
  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  const serviceDir = path.join(process.cwd(), "src");

  const serviceTemplate = `
class ${upperCase}Service {}

export default ${upperCase}Service;
`;

  fs.writeFileSync(
    path.join(serviceDir, `${formattedName}.service.ts`),
    serviceTemplate
  );
}
