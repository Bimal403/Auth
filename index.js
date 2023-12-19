const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello world");
});
server.listen(3005, "localhost", () => {
  console.log("Server is running on port 3005");
});
