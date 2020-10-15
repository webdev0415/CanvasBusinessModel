var express = require("express");
var app = express();
require("dotenv").config();
const http = require("http");
const socketIo = require("socket.io");
var bodyParser = require("body-parser");
var mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 8080;

const cors = require("cors");
app.use(cors());
// models
var models = require("./models");

//  Import routes
const google = require("./routes/google");
const apis = require("./routes/apis");
// Database Connection
models.sequelize
  .authenticate()
  .then(function () {
    console.log("connected to database");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const passport = require("./passport");
// Passport Definition
app.use(passport.initialize());
app.use(passport.session());
// register routes

app.use("/apis", apis);
app.use("/", google);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// app.get('/', function(req, res){
//     console.log('app listening on port: '+port+process.env.NODE_ENV);
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// socket.io
const server = http.createServer(app);
const io = socketIo(server);

io.on("connect", (socket) => {
  console.log("socket connected");
  socket.on("join", ({ name, room }, callback) => {
    console.log("New user joined.");
  });

  socket.on("sendMessage", (message, callback) => {
    console.log("New message arrived. ", message);
    socket.broadcast.emit("refresh");
    socket.emit("refresh");
  });

  socket.on("reload_placeholders", () => {
    socket.broadcast.emit("reload");
    // socket.emit('reload');
  });

  socket.on("disconnect", () => {
    console.log("Socket has been disconnected.");
  });
});

server.listen(port, function () {
  console.log("app listening on port: " + port);
});
