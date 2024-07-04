import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "../utils/formatUtils";

export function generateHook(name: string) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  let hookDir = process.cwd();

  if (!hookDir.includes(path.join("src"))) {
    hookDir = path.join(hookDir, "src");
  }

  const hookTemplate = `export default function use${upperCase}() {
};
`;

  fs.writeFileSync(
    path.join(hookDir, `${formattedName}.hook.ts`),
    hookTemplate
  );
}
