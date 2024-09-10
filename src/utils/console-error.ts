const underline = "\x1b[4m";
const reset = "\x1b[0m";

const red = "\x1b[31m";

type Actions = "CREATE" | "UPDATE";

export default function consoleError(error: string) {
  console.log(`${underline}${red}ERROR${reset} ${error}`);
}
