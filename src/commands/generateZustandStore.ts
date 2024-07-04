import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "../utils/formatUtils";

export function generateZustandStore(name: string) {
  const formattedName = formatServiceName(name);

  let zustandStoreDir = process.cwd();

  if (!zustandStoreDir.includes(path.join("src"))) {
    zustandStoreDir = path.join(zustandStoreDir, "src");
  }

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  const zustandStoreTemplate = `import { create } from "zustand";

interface ${upperCase} {}

export const ${formattedName}Store = create<${upperCase}>((set) => ({}));`;

  fs.writeFileSync(
    path.join(zustandStoreDir, `${formattedName}.store.ts`),
    zustandStoreTemplate
  );
}
