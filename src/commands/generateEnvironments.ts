import fs from "fs-extra";
import path from "path";
import consoleCreated from "../utils/console-created.js";

const envFiles = [
  ".env",
  ".env.development",
  ".env.pre-production",
  ".env.production",
];

function createEnvironmentFiles(envDir: string) {
  envFiles.forEach((file) => {
    fs.ensureFileSync(path.join(envDir, file));
    consoleCreated(file);
  });
}

function checkAndCreateEnvironmentDir() {
  const envDir = path.join(process.cwd(), "environments");

  if (fs.existsSync(envDir)) {
    const allFilesExist = envFiles.every((file) =>
      fs.existsSync(path.join(envDir, file))
    );

    if (allFilesExist) {
      console.log(
        "La carpeta environments y todos los archivos .env ya existen."
      );
      return false;
    }
  }

  fs.ensureDirSync(envDir);
  createEnvironmentFiles(envDir);
  return true;
}

function updateGitignore() {
  const gitignorePath = path.join(process.cwd(), ".gitignore");
  if (!fs.existsSync(gitignorePath)) {
    throw new Error("No se ha encontrado el fichero .gitignore");
  }

  const gitignoreContent = fs.readFileSync(gitignorePath, "utf-8");
  const envGitignoreEntry = "/environments";

  if (!gitignoreContent.includes(envGitignoreEntry)) {
    fs.appendFileSync(
      gitignorePath,
      `\n# Environment directory\n${envGitignoreEntry}\n`
    );
  }

  consoleCreated(".gitignore", "UPDATE");
}

function updateViteConfig() {
  const viteConfigPath = path.join(process.cwd(), "vite.config.ts");
  if (!fs.existsSync(viteConfigPath)) {
    throw new Error("No se ha encontrado el fichero vite.config.ts");
  }

  let viteConfigContent = fs.readFileSync(viteConfigPath, "utf-8");
  const envDirConfig = 'envDir: "./environments"';
  const defineConfigPattern = /export\s+default\s+defineConfig\s*\(\s*\{/;

  if (!viteConfigContent.includes(envDirConfig)) {
    viteConfigContent = viteConfigContent.replace(
      defineConfigPattern,
      `export default defineConfig({\n  ${envDirConfig},`
    );
    fs.writeFileSync(viteConfigPath, viteConfigContent, "utf-8");
  }

  consoleCreated(".vite.config.ts", "UPDATE");
}

export function generateEnvironments() {
  const created = checkAndCreateEnvironmentDir();
  if (created) {
    updateGitignore();
    updateViteConfig();
  }
}
