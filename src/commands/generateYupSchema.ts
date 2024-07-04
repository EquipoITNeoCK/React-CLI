import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "../utils/formatUtils";

export function generateYupSchema(name: string) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  let schemaDir = process.cwd();

  if (!schemaDir.includes(path.join("src"))) {
    schemaDir = path.join(schemaDir, "src");
  }

  const yupSchemaTemplate = `import { object, InferType } from "yup";

export const ${formattedName}Schema = object({});

export type ${upperCase} = InferType<typeof ${formattedName}Schema>;
`;

  fs.writeFileSync(
    path.join(schemaDir, `${formattedName}.schema.ts`),
    yupSchemaTemplate
  );
}
