// const express = require("express");
// const router = express.Router();
const router = require("express").Router();

router
  .route("/category")
  .get((req, res, next) => {})
  .post((req, res, next) => {});

router
  .route("/category/:id")
  .get((req, res, next) => {})
  .post((req, res, next) => {})
  .delete((req, res, next) => {});

//routing
router.get("/", (request, response, next) => {
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

router.get("/me", checkLogin, (req, res, next) => {
  res.send("hi");
});
// app.post();
// app.put();
// app.patch();
// app.delete();

//app.use();

module.exports = router;
