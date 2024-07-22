#!/usr/bin/env node

import { program } from "commander";
import { generateComponent } from "./commands/generateComponent.js";
import { generateHook } from "./commands/generateHook.js";
import { generateInterface } from "./commands/generateInterface.js";
import { generateService } from "./commands/generateService.js";
import { generateYupSchema } from "./commands/generateYupSchema.js";
import { generateZustandStore } from "./commands/generateZustandStore.js";
import { generateEnvironments } from "./commands/generateEnvironments.js";

const generate = program.command("generate").alias("g");

generate
  .command("component <component_name>")
  .alias("c")
  .action((componentName) => {
    generateComponent(componentName);
  });

generate
  .command("service <service_name>")
  .alias("s")
  .action((serviceName) => {
    generateService(serviceName);
  });

generate
  .command("hook <hook_name>")
  .alias("h")
  .action((hookName) => {
    generateHook(hookName);
  });

generate
  .command("interface <interface_name>")
  .alias("i")
  .action((interfaceName) => {
    generateInterface(interfaceName);
  });

generate
  .command("zustand <zustand_store_name>")
  .alias("z")
  .action((zustandStoreName) => {
    generateZustandStore(zustandStoreName);
  });

generate
  .command("schema <yup_schema_name>")
  .alias("sc")
  .action((yupSchemaName) => {
    generateYupSchema(yupSchemaName);
  });

generate
  .command("environments")
  .alias("envs")
  .action(() => {
    generateEnvironments();
  });

program.parse(process.argv);
