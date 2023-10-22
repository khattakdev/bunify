export function matchRoute(pattern: string, url: string): boolean {
  if ((pattern === "" || pattern === "/") && url === "/") {
    return true;
  } else if ((pattern === "" || pattern === "/") && url !== "/") {
    return false;
  }

  // TODO: Refactor the following
  var regex, regexPattern;
  if (pattern.startsWith("/") && pattern.endsWith("/")) {
    regexPattern = pattern.slice(1, -1);
  } else {
    regexPattern = pattern;
  }

  regexPattern = regexPattern.replace(/:\w+/g, "([^/]+)");
  regex = new RegExp(regexPattern);
  return regex.test(url);
}
