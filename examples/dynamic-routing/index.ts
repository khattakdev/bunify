import App from "../../src/index";

const app = new App();
const port = 3001;

app.get("/about", (_, res) => {
  return res.send("Hello");
});
app.get("ab?cd", (_, res) => {
  return res.send("ab?cd");
});

app.get("/", (_, res) => {
  return res.send("Home page");
});

app.listen(port, () => {
  console.log("Example listening on port number", port);
});
