const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.app);


server.listen(3000, () => {
    
    console.log("Running!");
});