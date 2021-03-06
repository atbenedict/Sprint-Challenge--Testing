const request = require("supertest");
const db = require("./dbConfig.js");
const server = require("./server.js");

describe("Routing Handlers", () => {
  describe("GET /games", () => {
    it("responds with status 200", async () => {
      const response = await request(server).get("/games");

      expect(response.status).toBe(200);
    });

    it("responds with JSON", async () => {
      const response = await request(server).get("/games");

      expect(response.type).toMatch(/json/i);
    });

    it("sends back correct type", async () => {
      const response = await request(server).get("/games");

      expect(typeof response.body).toBe("object");
    });

    it("sends back correct items", async () => {
      const response = await request(server).get("/games");

      expect(response.body).toEqual([]);
    });
  });

  describe("POST /games", () => {
    afterEach(async () => {
      await db("games").truncate();
    });

    it("responds with status 201", async () => {
      const body = { title: "Pong", genre: "arcade", releaseYear: 1972 };
      const response = await request(server)
        .post("/games")
        .send(body);

      expect(response.status).toBe(201);
      expect(response.body.length).toBe(1);
    });

    it("responds with status 422", async () => {
      const body = {};
      const response = await request(server)
        .post("/games")
        .send(body);

      expect(response.status).toBe(422);
    });

    it("sends back correct type", async () => {
      const body = { title: "Pong", genre: "arcade", releaseYear: 1972 };
      const response = await request(server)
        .post("/games")
        .send(body);

      expect(typeof response.body).toBe("object");
    });

    it("all needed properties added", async () => {
      const body = { title: "Pong", releaseYear: 1972 };
      const response = await request(server)
        .post("/games")
        .send(body);

      expect(response.status).toBe(422);
    });
  });
});
