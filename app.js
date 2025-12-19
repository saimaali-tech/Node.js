const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Node.js 🚀</h1><p>This is a simple Node app.</p>");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
