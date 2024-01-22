const express = require("express");
const app = express();
const router = require("../router/");
const multer = require("multer");

//body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/health", (req, res, next) => {
  res.send("Success ok");
});

app.use("/api/v1", router);

//404 handle
app.use((req, res, next) => {
  res.status(404).json({
    result: null,
    message: "Not found",
    meta: null,
  });
});

//Garbage collector (error handling middleware)
app.use((error, req, res, next) => {
  console.log("Garbage collector:", error);
  let code = error.code ?? 500;
  let message = error.message ?? "Internal server error..";

  //todo: handle different exception
  res.status(code).json({
    result: null,
    message: message,
    meta: null,
  });
});

module.exports = app;
