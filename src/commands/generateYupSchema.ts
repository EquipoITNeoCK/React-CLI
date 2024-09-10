import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";

export function generateYupSchema(name: string) {
  const formattedName = name.toLowerCase().replace(/[\W_]/g, "-");

  const upperCase = formattedName
    .split("-")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");

  const upperCaseWhole = formattedName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  let schemaDir = process.cwd();

  if (!schemaDir.includes(path.join("src"))) {
    schemaDir = path.join(schemaDir, "src");
  }

  const yupSchemaTemplate = `import { object, InferType } from "yup";

export const ${upperCase}Schema = object({});

export type ${upperCaseWhole} = InferType<typeof ${upperCase}Schema>;
`;

  fs.writeFileSync(
    path.join(schemaDir, `${formattedName}.schema.ts`),
    yupSchemaTemplate
  );

  consoleCreated(`${formattedName}.schema.ts`);
}
