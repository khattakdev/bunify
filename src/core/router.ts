export function matchRoute(pattern: string, url: string): boolean {
  const regex = new RegExp(`${pattern}`);
  return regex.test(url);
}
