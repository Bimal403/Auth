const express = require("express");
const app = express();

//routing
app.get("/", (request, response, next) => {
  response.json({
    result: "hi",
    msg: "success",
    meta: null,
  });
});

let checkLogin = (req, res, next) => {
  let loggedIn = false;
  if (loggedIn) {
    next();
  } else {
    res.status(401).send("sorry");
  }
};

app.get("/me", checkLogin, (req, res, next) => {
  res.send("hi");
});
// app.post();
// app.put();
// app.patch();
// app.delete();

//app.use();

module.exports = app;
