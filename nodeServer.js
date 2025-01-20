const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        res.end("Hello niqqa");
    } else if (req.url === "/ice-tea") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        res.end("Hello niqqa. here's yout ice tea");
    } else {
        res.statusCode = 404;
        res.setHeader("content-type", "text/plain");
        res.end("not found niqqa");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
});
