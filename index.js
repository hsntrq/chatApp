const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write(
      "<h1 style='background: linear-gradient(120deg, #832ef3, goldenrod);'>Hello Boy</h1>"
    );
    res.end();
  }
});

server.listen(80);
