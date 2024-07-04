function formatComponentName(name: string) {
  let formattedString = name
    .toLowerCase()
    .replace(/[_-\s]+(\w|$)/g, function (_match, nextChar) {
      return nextChar.toUpperCase();
    })
    .replace(/[\W_]/g, "");

  formattedString =
    formattedString.charAt(0).toUpperCase() + formattedString.slice(1);

  return formattedString;
}

function formatServiceName(name: string) {
  let formattedString = name
    .toLowerCase()
    .replace(/[_-\s]+(\w|$)/g, function (_match, nextChar) {
      return nextChar.toUpperCase();
    });

  formattedString =
    formattedString.charAt(0).toLowerCase() + formattedString.slice(1);

  return formattedString;
}

function formatDirectoryName(name: string) {
  let formattedString = name.toLowerCase().replace(/[\W_]/g, "-");

  formattedString =
    formattedString.charAt(0).toLowerCase() + formattedString.slice(1);

  return formattedString;
}

export { formatComponentName, formatServiceName, formatDirectoryName };
