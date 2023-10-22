import App from "../../src/index";

const app = new App();
const port = 3001;

app.get("/users/:id", (req, res) => {
  return res.send("Route Params - /users");
});

app.get("/", (_, res) => {
  return res.send("Hi there!");
});

app.listen(port, () => {
  console.log("Example listening on port number", port);
});
