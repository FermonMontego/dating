import { Router } from "express";

import userRouter from "#routes/user/user.controller.js";
import authController from "./authorization/auth.controller.js";

const entryRouter = Router();

entryRouter.get("/", function (req, res) {
  res.json({ message: "123456" });
});

entryRouter.use("/users", userRouter);

entryRouter.use("/auth", authController);

export default entryRouter;
