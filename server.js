var express = require("express");
var app = express();
var myList = require("./todo.js");
var routePages = require("./routes.js")
app.use("/", routePages);
app.use(express.static(__dirname + "/public"));


var server = app.listen(3000, function() {
	console.log(myList);
});

