import HttpHandler from "./httpHandler";

type RouteHandler = (
  req: Request,
  res: { send: (body: string) => Response },
) => Response;

class App {
  private server;
  private httpHandler: HttpHandler;

  constructor() {
    this.httpHandler = new HttpHandler();
    this.server = Bun.serve({
      fetch: (req: Request) => this.httpHandler.handleRequest(req),
    });
  }

  get(path: string | RegExp, handler: RouteHandler) {
    this.httpHandler.get(path, handler);
  }

  post(path: string | RegExp, handler: RouteHandler) {
    this.httpHandler.post(path, handler);
  }

  put(path: string | RegExp, handler: RouteHandler) {
    this.httpHandler.put(path, handler);
  }

  delete(path: string | RegExp, handler: RouteHandler) {
    this.httpHandler.delete(path, handler);
  }

  listen(port: number, callback?: () => void) {
    const server = Bun.serve({
      port,
      fetch: (req) => this.httpHandler.handleRequest(req),
      //   fetch: (req) => new Response("Welcome to bun"),
    });

    if (callback) {
      callback();
    }
  }

  // logic goes here
}

export default App;
