//Creating a Web Server

var http = require('http');
http.createServer((request, response) => { 
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("<h1>Hello, Server is running on 3000 port  </h1>");
    return response.end();
 }).listen(3000);
 console.log("Server is running at http://<workspace-url>/");