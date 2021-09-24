const express = require("express");
const axios = require("axios"); // axios library to fetch API
const app = express();
const port = 3000;

// get all
app.get("/users", async (req, res) => {
  try {
    const url = "https://api.github.com/users";
    const response = await axios.get(url); // using async await for promises
    res.status(200).json({ data: response.data });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
});

// get one
app.get("/users/:name", async (req, res) => {
  try {
    const url = `https://api.github.com/users/${req.params.name}`;
    const response = await axios.get(url); // using async await for promises
    res.status(200).json({ data: response.data });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
});

// listening port
app.listen(port, () => console.log(`Listening to ${port}`));
