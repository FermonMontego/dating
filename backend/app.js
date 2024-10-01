import express from "express";
import dotenv from "dotenv";
import { dirname, join } from "path";

import cookieParser from "cookie-parser";
import createError from "http-errors";
import { fileURLToPath } from "url";
import logger from "morgan";

import entryRouter from "#src/routes/entryRouter.js";

import db from "./db/database.js";
import { Model, Sequelize } from "sequelize";

class User extends Model { }

const model = User.init({
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  }
}, {
  sequelize: db
});

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(process.env.PG_HOST, process.env.PG_USER, process.env.PG_PASSWORD, process.env.PG_DB, 'SUKA')

app.set("views", join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use("/static", express.static(join(__dirname, "static")));

app.use("/api", entryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error page | " + err.status });
});

export default app;
