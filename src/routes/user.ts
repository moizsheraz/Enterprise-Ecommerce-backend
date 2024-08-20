import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
// import verifyToken from "../middleware/auth";
import {RegisterUser} from "../controllers/user"

const router = express.Router();

// router.get("/me", verifyToken, async (req: Request, res: Response) => {
//   const userId = req.userId;

//   try {
//     const user = await User.findById(userId).select("-password");
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "something went wrong" });
//   }
// });

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
RegisterUser
);

export default router;