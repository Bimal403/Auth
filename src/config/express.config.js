const express = require("express");
const app = express();
const router = require("../router/");
const { MulterError } = require("multer");

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
  let result = error.result ?? null;

  //todo: handle different exception
  if (error instanceof MulterError) {
    //handle errors
    if (error.code === "LIMIT_FILE_SIZE") {
      code = 400;
      message = error.message;
    }
  }
  res.status(code).json({
    result: result,
    message: message,
    meta: null,
  });
});

module.exports = app;
