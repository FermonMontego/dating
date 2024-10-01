import { Router } from "express";

import userRouter from "#routes/user/user.controller.js";
import authRoute from './authorization/auth.route.js';
import registrationRoute from './registration/registration.route.js'

const entryRouter = Router();

entryRouter.get("/", function (req, res) {
  res.json({ message: "API backend" });
});

entryRouter.use("/users", userRouter);
entryRouter.use("/auth", authRoute);
entryRouter.use("/registration", registrationRoute);

export default entryRouter;
