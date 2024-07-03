import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "./formatUtils.js";

export function generateInterface(name) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  const interfaceDir = path.join(process.cwd(), "src");

  const interfaceTemplate = `export interface ${upperCase} {};`;

  fs.writeFileSync(
    path.join(interfaceDir, `${formattedName}.interface.ts`),
    interfaceTemplate
  );
}
