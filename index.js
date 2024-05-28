const http = require("http");
const { readFile } = require("fs");
const { join } = require("path");

const server = http.createServer(({ url, method }, res) => {
  if (url === "/" && method.toLowerCase() == "get") {
    readFile(join(__dirname, "./", "regions.json"), "utf-8", (err, data) => {
      if (!err) res.end(data);
      if (err) res.statusCode(400).end("Error");
    });
  } else {
    console.log(url);
    fetch("https://islomapi.uz/api" + url)
      .then((e) => e.json())
      .then((e) => res.end(JSON.stringify(e)))
      .catch((e) => res.end(e));
  }
});

server.listen("3000", () => {
  console.log("server is working");
});
