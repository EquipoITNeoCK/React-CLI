import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";
import consoleError from "../utils/console-error.js";

export function generateHook(name: string) {
  if (!name.toLowerCase().includes("use")) {
    consoleError(`El nombre del hook debe comenzar por 'use'`);
    return;
  }

  let hookDir = process.cwd();

  if (!hookDir.includes(path.join("src"))) {
    hookDir = path.join(hookDir, "src");
  }

  const hookTemplate = `export default function ${name}() {};
`;

  fs.writeFileSync(path.join(hookDir, `${name}.hook.ts`), hookTemplate);

  consoleCreated(`${name}.hook.ts`);
}
