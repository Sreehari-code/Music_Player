// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=10`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Deezer" });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
