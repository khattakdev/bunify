import App from "../../src/index";

const app = new App();
const port = 3001;

app.get("ab(cd)?e", (_, res) => {
  return res.send("ab(cd)?e");
});

app.get("ab?cd", (_, res) => {
  return res.send("ab?cd");
});

app.get("ab*cd", (_, res) => {
  return res.send("ab*cd");
});

app.get("/", (_, res) => {
  return res.send("Dynamic Routing - Home Page");
});

app.listen(port, () => {
  console.log("Example listening on port number", port);
});
