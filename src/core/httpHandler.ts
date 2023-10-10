type RouteHandler = (
  req: Request,
  res: { send: (body: string) => Response },
) => Response;
class HttpHandler {
  // logic for handling HTTP request
  private routes: { [path: string]: RouteHandler } = {};

  get(path: string, handler: RouteHandler) {
    this.routes[path] = handler;
  }

  handleRequest(req: Request): Response {
    const url = new URL(req.url);
    const handler = this.routes[url.pathname];

    if (handler) {
      const res = {
        send: (body: string) => new Response(body),
      };

      return handler(req, res);
    }

    return new Response("Not Found", { status: 404 });
  }
}

export default HttpHandler;
