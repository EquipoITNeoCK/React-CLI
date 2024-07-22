const blue = "\x1b[38;5;69m";
const green = "\x1b[32m";
const underline = "\x1b[4m";
const reset = "\x1b[0m";

type Actions = "CREATE" | "UPDATE";

export default function consoleCreated(
  itemCreated: string,
  action: Actions = "CREATE"
) {
  const color = action === "CREATE" ? green : blue;
  console.log(`${underline}${color}${action}${reset} ${itemCreated}`);
}
