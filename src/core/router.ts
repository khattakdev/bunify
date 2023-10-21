export function matchRoute(pattern: string, url: string): boolean {
  if ((pattern === "" || pattern === "/") && url === "/") {
    return true;
  } else if ((pattern === "" || pattern === "/") && url !== "/") {
    return false;
  }

  let regex;

  if (pattern.startsWith("/") && pattern.endsWith("/")) {
    const regexPattern = pattern.slice(1, -1);
    regex = new RegExp(regexPattern);
  } else {
    regex = new RegExp(pattern);
  }
  console.log(pattern, " ---- ", regex);
  return regex.test(url);
}
