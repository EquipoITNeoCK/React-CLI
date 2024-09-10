import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";

export function generateInterface(name: string) {
  const formattedName = name.toLowerCase().replace(/[\W_]/g, "-");

  const upperCase = formattedName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

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
