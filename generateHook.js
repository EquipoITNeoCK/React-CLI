import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "./formatUtils.js";

export function generateHook(name) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  const hookDir = path.join(process.cwd(), "src");

  const hookTemplate = `export default function use${upperCase}() {
};
`;

  fs.writeFileSync(
    path.join(hookDir, `${formattedName}.hook.ts`),
    hookTemplate
  );
}
