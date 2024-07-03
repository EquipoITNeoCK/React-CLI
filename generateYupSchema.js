import fs from "fs-extra";
import path from "path";
import { formatServiceName } from "./formatUtils.js";

export function generateYupSchema(name) {
  const formattedName = formatServiceName(name);

  const upperCase =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  const schemaDir = path.join(process.cwd(), "src");

  const yupSchemaTemplate = `import { object, InferType } from "yup";

export const ${formattedName}Schema = object({});

export type ${upperCase} = InferType<typeof ${formattedName}Schema>;
`;

  fs.writeFileSync(
    path.join(schemaDir, `${formattedName}.schema.ts`),
    yupSchemaTemplate
  );
}
