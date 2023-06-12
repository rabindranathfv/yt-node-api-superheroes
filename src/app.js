import express from "express";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import displayRoutes from "express-routemap";

import { API_VERSION, PORT, DB_HOST, DB_PORT, DB_NAME } from "./config/config.js";
import corsConfig from "./config/cors.config.js";

import superHeroesRoutes from "./routes/superheroes.routes.js";

const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(cors(corsConfig));

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const connection = mongoose.connect(MONGO_URL).then((conn) => {
  console.log(`DB Connection successfully ${MONGO_URL}`)
}).catch((err) => {
  console.log('🚀 ~ file: app.js:31 ~ connection ~ err:', err);
})

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
