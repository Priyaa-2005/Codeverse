const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    message: "CodeVerse API is running 🚀"
  });
});


app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Hello from CodeVerse backend! 🚀"
  });
});

module.exports = app;