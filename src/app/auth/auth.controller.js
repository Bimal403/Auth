const { z } = require("zod");

class AuthController {
  register = (req, res, next) => {
    try {
      let payload = req.body;
      //file
      const registerSchema = z.object({
        name: z.string().min(2).max(50),
        email: z.string().email(),
        role: z
          .string()
          .regex(/admin|customer|seller/)
          .default("customer"),
      });
      let validatedData = registerSchema.parse(payload);
      if (req.file) {
        //req.files
        payload.image = req.file.filename;
      } else if (req.files) {
        payload.image = req.files((item) => item.filename);
      }
      res.json({
        result: validatedData,
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
