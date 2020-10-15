const express = require("express");
const path = require("path");
const http = require("http");
const SocketIO = require("socket.io");
require("dotenv").config();

const { connectDb } = require("./database/db");

// Initializations
const app = express();

// Database
connectDb();

console.log(process.env.PORT);

// Settings
const pathPublic = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;
app.use(express.static(pathPublic));

const server = http.createServer(app);

// Connect active server Backend
module.exports.io = SocketIO(server);
require("./sockets/socket");

// Start Server
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
