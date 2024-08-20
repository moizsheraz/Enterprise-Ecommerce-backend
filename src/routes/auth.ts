import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { LoginUser } from "../controllers/auth"


const router = express.Router();

router.post(
    "/login",
    [
      check("email", "Email is required").isEmail(),
      check("password", "Password with 6 or more characters required").isLength({
        min: 6,
      }),
    ],
   LoginUser
  );

  export default router;

