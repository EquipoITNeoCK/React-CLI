import fs from "fs-extra";
import path from "path";

export async function generateZustandStore() {
  let srcDir = path.join(process.cwd());

  if (!process.cwd().includes(path.join("src"))) {
    srcDir = path.join(process.cwd(), "src");
  }

  const zustandDir = path.join(srcDir, "zustand");
  const slicesDir = path.join(zustandDir, "slices");
  const storeFile = path.join(zustandDir, "app.store.ts");

  if (!fs.existsSync(zustandDir)) {
    fs.mkdirSync(zustandDir);
  }

  if (!fs.existsSync(slicesDir)) {
    fs.mkdirSync(slicesDir);
  }

  const storeTemplate = `import { create } from "zustand";

type AppStore = {};

export const useAppStore = create<AppStore>((...a) => ({}));
  `;

  if (!fs.existsSync(storeFile)) {
    fs.writeFileSync(storeFile, storeTemplate);
  }
}
