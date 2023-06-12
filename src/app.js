import express from "express";
import { API_VERSION, PORT } from "./config/config.js";
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet'
import cors from 'cors';
import displayRoutes from 'express-routemap';
import corsConfig from "./config/cors.config.js";

const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

const app = express();

app.use(cookieParser())
app.use(hpp())
app.use(helmet())
app.use(cors(corsConfig))

app.use(`/${API_PREFIX}/${API_VERSION}/alive`, (req, res) => {
  res.json({
    ok: true,
    message: `API IS ALIVE AND UP AND RUNING IN PORT: ${PORT_APP}`,
  });
});

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(
    `api is running in enviroment ${process.env.NODE_ENV} at ${PORT_APP}`
  );
});
