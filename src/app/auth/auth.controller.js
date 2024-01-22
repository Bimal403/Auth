class AuthController {
  register = (req, res, next) => {
    try {
      let payload = req.body;
      res.json({
        result: payload,
      });
    } catch (exception) {
      // next({ code: 400, message: "Validation failure" });
      next(exception);
    }
  };
  verifyToken = (req, res, next) => {
    try {
    } catch (exception) {
      next(exception);
    }
  };
  setPassword = (req, res, next) => {
    try {
    } catch (exception) {
      next(exception);
    }
  };
  login = (req, res, next) => {
    try {
    } catch (exception) {
      next(exception);
    }
  };
  forgetPassword = (req, res, next) => {
    try {
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
