const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mesg: "hello",
  });
});

app.get("/users", (req, res) => {
  res.json({
    mesg: "hello users",
  });
});

app.listen(3000);
