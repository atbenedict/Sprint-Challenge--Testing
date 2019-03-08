const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "server is working" });
});

const games = [
  {
    title: "Myth: The Fallen Lords",
    genre: "RTT",
    releaseYear: 1997
  },
  {
    title: "Warcraft III: Reign of Chaos",
    genre: "RTT",
    releaseYear: 2002
  },
  {
    title: "Borderlands 2",
    genre: "Open World Action Role Playing FPS",
    releaseYear: 2012
  }
];

server.get("/games", (req, res) => {
  res.status(200).json(games);
});

server.post("/games", (req, res) => {
  let { title, genre, releaseYear } = req.body;
  if (!title || !genre) {
    return res
      .status(422)
      .json({ error: "You must include a title and genre." });
  }
  let allTitles = [];
  for (i = 0; i < games.length; i++) {
    allTitles.push(games[i].title);
  }
  if (allTitles.includes(req.body.title)) {
    return res.status(419).json({ error: "That game is already added." });
  }
  return res.status(201).json({ message: `${title} added to games database.` });
});

module.exports = server;
