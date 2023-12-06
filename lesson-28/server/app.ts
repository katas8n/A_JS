const http = require('http');

const server = http.createServer((req: Request , res: Response) => {
    console.log("Our first request to server!");
    res.end('ok');
})


server.listen(3000)