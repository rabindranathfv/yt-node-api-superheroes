import express from "express";
import { API_VERSION, PORT } from "./config/config.js";

const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

const app = express();

app.use(`/${API_PREFIX}/${API_VERSION}/alive`, (req, res) => {
  res.json({
    ok: true,
    message: `API IS ALIVE AND UP AND RUNING IN PORT: ${PORT_APP}`,
  });
});

app.listen(PORT_APP, () => {
  console.log(
    `api is running in enviroment ${process.env.NODE_ENV} at ${PORT_APP}`
  );
});
