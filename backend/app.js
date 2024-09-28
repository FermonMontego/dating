import express from "express";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { Sequelize, DataTypes, Model } from "sequelize";

import cookieParser from "cookie-parser";
import createError from "http-errors";
import { fileURLToPath } from "url";
import logger from "morgan";

import entryRouter from "#src/routes/entryRouter.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: join(__dirname, "db", "database", "data.sqlite"),
});

try {
  sequelize.authenticate();
  console.log("Connection is completed" + ' on PORT ' + process.env.PORT);
} catch (err) {
  console.log(`connection to database has error - ${err?.response}`);
}

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

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

app.use("/", async function (req, res, next) {
  await User.sync()
  const user = await User.create({ firstName: "Avraam", lastName: 'Lincoln', age: 30 });
  console.log(JSON.stringify(user, null, 2))
  next()
}, entryRouter);

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
