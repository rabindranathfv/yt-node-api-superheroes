import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import displayRoutes from "express-routemap";
import morgan from "morgan";

import {
  API_VERSION,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  LOG_FORMAT,
} from "./config/config.js";
import corsConfig from "./config/cors.config.js";
import { logger, stream } from "./utils/logger.js";

import superHeroesRoutes from "./routes/superheroes.routes.js";

const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(cors(corsConfig));
app.use(morgan(LOG_FORMAT ?? "../logs", { stream }));

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connection = mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    logger.info(`DB Connection successfully ${MONGO_URL.slice(0, 10)}`);
  })
  .catch((err) => {
    logger.error("🚀 ~ file: app.js:31 ~ connection ~ err:", err);
  });

app.use(`/${API_PREFIX}/${API_VERSION}/alive`, (req, res) => {
  res.json({
    ok: true,
    message: `API IS ALIVE AND UP AND RUNING IN PORT: ${PORT_APP}`,
  });
});
app.use(`/${API_PREFIX}/${API_VERSION}/superheroes`, superHeroesRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(
    `api is running in enviroment ${process.env.NODE_ENV} at ${PORT_APP}`
  );
});
