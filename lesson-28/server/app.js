const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Our first request to server!");
    res.end('ok');
});
server.listen(3000);
