const express = require("express");
const bodyParser = require("body-parser");
const method = require("method-override");

// const port = 3000;
var port = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// app.listen(port);

app.listen(PORT, function() {
	  	console.log("App listening on PORT " + PORT);
	});
