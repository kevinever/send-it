
//credits
//with the help of  Acedemind tutorial i am going to be able to create my own api endpoint with their help i want to credit them my God bless their work  


//this server file will help us to create a listening server if none is available
//then by default the 911 server will be listening


//http is a node server module that helps us to create our own server
//we need then to import it by using require
const http = require('http');

const app = require('./app');

const port = process.env.PORT || 911;

const server = http.createServer(app);

server.listen(port);
console.log('server is listening on port 911');