import { serve } from "bun";
import HttpHandler from "./httpHandler";
import Router from "./router";

type RouteHandler = (
  req: Request,
  res: { send: (body: string) => Response },
) => Response;

class App {
  private server;
  private httpHandler: HttpHandler;

  constructor() {
    this.httpHandler = new HttpHandler();
    this.server = serve({
      fetch: (req: Request) => this.httpHandler.handleRequest(req),
    });
  }

  get(path: string, handler: RouteHandler) {
    this.httpHandler.get(path, handler);
  }

  post(path: string, handler: RouteHandler) {
    this.httpHandler.post(path, handler);
  }

  put(path: string, handler: RouteHandler) {
    this.httpHandler.put(path, handler);
  }

  delete(path: string, handler: RouteHandler) {
    this.httpHandler.delete(path, handler);
  }

  listen(port: number, callback?: () => void) {
    const server = serve({
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
