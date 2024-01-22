const router = require("express").Router();
const authCtrl = require("./auth.controller");
const fs = require("fs");

const multer = require("multer");
const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = "./public/uploads/user";
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    let random = Math.round(Math.random() * 9999);
    let ext = file.originalname.split(".").pop();
    let filename = Date.now() + "-" + random + "." + ext;
    cb(null, filename);
  },
});
const uploader = multer({
  storage: myStorage,
});

router.post("/register", uploader.single("image"), authCtrl.register);
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
