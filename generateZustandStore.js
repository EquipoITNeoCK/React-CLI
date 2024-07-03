import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "./formatUtils.js";

export function generateZustandStore(name) {
  const formattedName = formatServiceName(name);

  const zustandStoreDir = path.join(process.cwd(), "src");

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
