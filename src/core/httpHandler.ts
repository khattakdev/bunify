type RouteHandler = (
  req: Request,
  res: { send: (body: string) => Response },
) => Response;
import { matchRoute } from "./router";
class HttpHandler {
  // logic for handling HTTP request
  private getRoutes: { [path: string]: RouteHandler } = {};
  private postRoutes: { [path: string]: RouteHandler } = {};
  private deleteRoutes: { [path: string]: RouteHandler } = {};
  private putRoutes: { [path: string]: RouteHandler } = {};

  get(path: string, handler: RouteHandler) {
    this.getRoutes[path] = handler;
  }

  post(path: string, handler: RouteHandler) {
    this.postRoutes[path] = handler;
  }

  put(path: string, handler: RouteHandler) {
    this.putRoutes[path] = handler;
  }

  delete(path: string, handler: RouteHandler) {
    this.deleteRoutes[path] = handler;
  }

  private handleMethod(
    method: string,
    routes: { [path: string]: RouteHandler },
    req: Request,
  ): Response | null {
    const url = new URL(req.url);
    for (const pattern in routes) {
      if (matchRoute(pattern, url.pathname)) {
        const handler = routes[pattern];
        const res = {
          send: (body: string) => new Response(body),
        };
        return handler(req, res);
      }
    }

    return new Response("Not Found", { status: 404 });
  }
  handleRequest(req: Request): Response {
    const response =
      this.handleMethod("GET", this.getRoutes, req) ||
      this.handleMethod("POST", this.postRoutes, req) ||
      this.handleMethod("PUT", this.postRoutes, req) ||
      this.handleMethod("DELETE", this.postRoutes, req);

    return response || new Response("404 not found", { status: 404 });
  }
}

export default HttpHandler;
