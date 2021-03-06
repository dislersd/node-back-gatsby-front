const express = require("express");
const server = express();
const userRoutes = require("./users/users-router.js");
const register = require("./auth/register.js");
const login = require("./auth/login.js");
const sessionConfig = require("./sessions/sessionConfig.js");
const cors = require('cors');
// bringing in session
const session = require("express-session");

server.use(session(sessionConfig));
server.use(cors());
server.use(express.json());
server.use("/api/register", register);
server.use("/api/login", login);
server.use("/api/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

module.exports = server;
