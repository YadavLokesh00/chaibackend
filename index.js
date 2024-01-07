require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello guys we are live</h1>");
});

app.listen(port, () => {
  console.log(`listening on port localhost:${port}`);
});
