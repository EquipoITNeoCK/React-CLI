import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "../utils/formatUtils.js";
import consoleCreated from "../utils/console-created.js";

export function generateInterface(name: string) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  let interfaceDir = process.cwd();

  if (!interfaceDir.includes(path.join("src"))) {
    interfaceDir = path.join(interfaceDir, "src");
  }

  const interfaceTemplate = `export interface ${upperCase} {};`;

  fs.writeFileSync(
    path.join(interfaceDir, `${formattedName}.interface.ts`),
    interfaceTemplate
  );

  consoleCreated(`${formattedName}.interface.ts`);
}
