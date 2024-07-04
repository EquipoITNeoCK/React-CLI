#!/usr/bin/env node

import { program } from "commander";
import { generateComponent } from "./commands/generateComponent";
import { generateHook } from "./commands/generateHook";
import { generateInterface } from "./commands/generateInterface";
import { generateService } from "./commands/generateService";
import { generateYupSchema } from "./commands/generateYupSchema";
import { generateZustandStore } from "./commands/generateZustandStore";

program
  .command("component <component_name>")
  .alias("c")
  .action((componentName) => {
    generateComponent(componentName);
  });

program
  .command("service <service_name>")
  .alias("s")
  .action((serviceName) => {
    generateService(serviceName);
  });

program
  .command("hook <hook_name>")
  .alias("h")
  .action((hookName) => {
    generateHook(hookName);
  });

program
  .command("interface <interface_name>")
  .alias("i")
  .action((interfaceName) => {
    generateInterface(interfaceName);
  });

program
  .command("zustand <zustand_store_name>")
  .alias("z")
  .action((zustandStoreName) => {
    generateZustandStore(zustandStoreName);
  });

program
  .command("schema <yup_schema_name>")
  .alias("sc")
  .action((yupSchemaName) => {
    generateYupSchema(yupSchemaName);
  });

program.parse(process.argv);
