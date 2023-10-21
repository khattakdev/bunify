import App from "../../src/index";

const app = new App();
const port = 3001;

app.get(/.*man$/, (_, res) => {
  return res.send("RegEx - {value}man");
});

app.get("/", (_, res) => {
  return res.send("RegEx - Home Page");
});

app.listen(port, () => {
  console.log("Example listening on port number", port);
});
