const app = require("./src/config/express.config");
const http = require("http");

const server = http.createServer(app);

server.listen("3005", "localhost", (err) => {
  if (!err) {
    console.log("Server is running on port 3005");
    console.log("Press Ctrl + C to disconnect");
    console.log("Use http://localhost:3005/ to browse the server");
  }
});
