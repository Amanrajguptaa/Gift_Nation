import express from "express";
import passport from "passport";
import {
  failedAuth,
  logout,
  successAuth,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/login/failed", failedAuth);

authRouter.get("/login/success", successAuth);

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

authRouter.get("/logout", logout);

export default authRouter;
