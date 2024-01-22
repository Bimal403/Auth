const router = require("express").Router();
const authCtrl = require("./auth.controller");
const uploader = require("../../middlewares/uploader.middleware");

const ValidateRequest = require("../../middlewares/validate-request.middleware");
const { registerSchema } = require("./auth.validator");
const dirSetup = (req, res, next) => {
  req.uploadDir = "./public/uploads/user";
  next();
};

router.post(
  "/register",
  dirSetup,
  uploader.single("image"),
  ValidateRequest(registerSchema),
  authCtrl.register
);
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
