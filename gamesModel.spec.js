const games = require("./gamesModel.js");

const db = require("./dbConfig.js");

describe("Games tests", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

  it("game gets added", async () => {
    const id = await games.insert({
      title: "Pong",
      genre: "arcade",
      releaseYear: 1972
    });
    console.log(id);
    expect(id.length).toBe(1);
    expect(id[0]).toBe(1);
  });
});
