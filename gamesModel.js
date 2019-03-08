const db = require("./dbConfig.js");

module.exports = {
  listEverything,
  insert
};

async function listEverything() {
  return db("games");
}

async function insert(game) {
  return db("games").insert(game);
}
