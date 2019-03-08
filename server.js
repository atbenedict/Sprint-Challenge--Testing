const express = require("express");
const games = require("./gamesModel.js");
const server = express();

server.use(express.json());

module.exports = server;

server.get("/games", async (req, res) => {
  const rows = await games.listEverything();

  res.status(200).json(rows);
});

server.post("/games", async (req, res) => {
  const gameList = req.body;

  if (gameList.title && gameList.genre) {
    const ids = await games.insert(gameList);
    res.status(201).json(ids);
  } else {
    res.status(422).json({ message: `missing info` });
  }
});

module.exports = server;
