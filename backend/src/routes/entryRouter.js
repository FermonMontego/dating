import { Router } from "express";

import userRouter from "#routes/user/user.controller.js";
import authController from "./authorization/auth.controller.js";
import registrationController from "./registration/registration.controller.js";

const entryRouter = Router();

entryRouter.get("/", function (req, res) {
  res.json({ message: "Test xueta ebanaya 228 1337" });
});

entryRouter.use("/users", userRouter);
entryRouter.use("/auth", authController);
entryRouter.use("/registration", registrationController);

export default entryRouter;
