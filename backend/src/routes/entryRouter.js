import { Router } from "express";

import userRouter from "#routes/user/user.controller.js";

const entryRouter = Router();

entryRouter.get("/", function (req, res) {
  res.json({ message: "Homepage" });
});

entryRouter.use("/users", userRouter);

export default entryRouter;
