const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// creating server to repond when requested
const server = http.createServer((req, res) => {
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    // res.write(data);
    res.end(data); // if passing just single file without any other processes, I can pass in data immediately to end.
  });
});

// start the server at port 3000
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
