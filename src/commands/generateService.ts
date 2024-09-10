import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";

export function generateService(name: string) {
  const formattedName = name.toLowerCase().replace(/[\W_]/g, "-");

  const upperCase = formattedName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  let serviceDir = process.cwd();

  if (!serviceDir.includes(path.join("src"))) {
    serviceDir = path.join(serviceDir, "src");
  }

  const serviceTemplate = `class ${upperCase}Service {}

export default ${upperCase}Service;
`;

  fs.writeFileSync(
    path.join(serviceDir, `${formattedName}.service.ts`),
    serviceTemplate
  );

  consoleCreated(`${formattedName}.service.ts`);
}
