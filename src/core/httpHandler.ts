type RouteHandler = (
  req: Request,
  res: { send: (body: string) => Response },
) => Response;
class HttpHandler {
  // logic for handling HTTP request
  private getRoutes: { [path: string]: RouteHandler } = {};
  private postRoutes: { [path: string]: RouteHandler } = {};

  get(path: string, handler: RouteHandler) {
    this.getRoutes[path] = handler;
  }

  post(path: string, handler: RouteHandler) {
    this.postRoutes[path] = handler;
  }

  private handleMethod(
    method: string,
    routes: { [path: string]: RouteHandler },
    req: Request,
  ): Response | null {
    const url = new URL(req.url);
    const handler = routes[url.pathname];

    if (handler && req.method == method) {
      const res = {
        send: (body: string) => new Response(body),
      };
      return handler(req, res);
    }

    return null;
  }
  handleRequest(req: Request): Response {
    const response =
      this.handleMethod("GET", this.getRoutes, req) ||
      this.handleMethod("POST", this.postRoutes, req);

    return response || new Response("404 not found", { status: 404 });

    // const url = new URL(req.url);

    // if (req.method == "GET") {
    //   const handler = this.getRoutes[url.pathname];

    //   if (handler) {
    //     const res = {
    //       send: (body: string) => new Response(body),
    //     };

    //     return handler(req, res);
    //   }
    // } else if (req.method == "POST") {
    //   const handler = this.postRoutes[url.pathname];

    //   if (handler) {
    //     const res = {
    //       send: (body: string) => new Response(body),
    //     };

    //     return handler(req, res);
    //   }
    // }

    // return new Response("Not Found", { status: 404 });
  }
}

export default HttpHandler;
