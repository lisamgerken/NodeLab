var http = require("http");
var myList = require("./todo.js");

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
	response.writeHead(200, { "Content-type": "text/plain"});
	response.write(myList.info[Math.floor(Math.random() * myList.info.length)]);
	response.end();
}