var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(5000);

io.on("connection", function(socket) {
	console.log("Have people connect" + socket.id);

});

app.get("/", function(req, res) {
	res.render("home");
});