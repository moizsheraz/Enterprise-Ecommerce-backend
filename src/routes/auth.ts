import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { LoginUser,Logout } from "../controllers/auth"
import verifyToken from "../middleware/auth";


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
router.post("/logout",Logout)

  router.get("/verify-token",verifyToken,(req:Request,res:Response)=>{
    res.status(200).send({ userId: req.userId });  // sending user id
  });

  export default router;

