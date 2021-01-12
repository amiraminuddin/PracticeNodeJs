//import module globally
const http = require('http');

//import custom module
const routes = require('./routes');

console.log(routes.someText);

//create a server
const server = http.createServer(routes.handler);

//keep to listen for incoming request
//search url localhost:3000
server.listen(3000);