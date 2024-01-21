const express = require("express");
const app = express();
const router = require("../router/index");

app.use("/api/v1", router);

module.exports = app;
