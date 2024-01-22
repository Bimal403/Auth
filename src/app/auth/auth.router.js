const router = require("express").Router();
const authCtrl = require("./auth.controller");

router.post("/register", authCtrl.register);
router.get("/verify-token", authCtrl.verifyToken);
router.post("/set-password/:token", authCtrl.setPassword);

router.post("/login", authCtrl.login);
router.post("/forget-password", authCtrl.forgetPassword);
router.post(
  "/me",
  (req, res, next) => {},
  (req, res, next) => {}
);
router.post(
  "/logout",
  (req, res, next) => {},
  (req, res, next) => {}
);
module.exports = router;
