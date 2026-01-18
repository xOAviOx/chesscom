const express = require("express");
const socket = require("socket.io");
const { Chess } = require("chess.js");
const http = require("http");
const path = require("path");

const app = express();

const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();
let players = {};

let currentPlayer = "W";

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
