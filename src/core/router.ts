export function matchRoute(pattern: string, url: string): boolean {
  if ((pattern === "" || pattern === "/") && url === "/") {
    return true;
  } else if ((pattern === "" || pattern === "/") && url !== "/") {
    return false;
  }
  const regex = new RegExp(`${pattern}`);
  return regex.test(url);
}
