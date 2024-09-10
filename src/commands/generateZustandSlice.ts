import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";
import consoleError from "../utils/console-error.js";

export function generateZustandSlice(sliceName: string) {
  const formattedFileName = sliceName.toLowerCase().replace(/[\W_]/g, "-");
  const upperCaseFirstLetter =
    sliceName.charAt(0).toUpperCase() + sliceName.slice(1);
  const slicesDir = path.join(process.cwd(), "src", "zustand", "slices");

  const sliceFile = path.join(slicesDir, `${formattedFileName}.slice.ts`);

  const formatedSliceNameToCamelCase = sliceName
    .replace(/[-_\s]+/g, " ")
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");

  if (!fs.existsSync(slicesDir)) {
    consoleError("La carpeta 'slices' no existe en 'src/zustand'.");
    return;
  }

  if (!fs.existsSync(sliceFile)) {
    const sliceTemplate = `import { StateCreator } from "zustand";
    
interface ${upperCaseFirstLetter}State {}
    
interface ${upperCaseFirstLetter}Actions {}
    
export type ${upperCaseFirstLetter}Slice = ${upperCaseFirstLetter}State & ${upperCaseFirstLetter}Actions;
    
export const ${formatedSliceNameToCamelCase}Slice: StateCreator<${upperCaseFirstLetter}Slice> = (set) => ({});
    `;

    fs.writeFileSync(sliceFile, sliceTemplate);
    consoleCreated(`${formattedFileName}.slice.ts`);
  } else {
    consoleError(`El archivo ${formattedFileName}.slice.ts ya existe.`);
  }
}
