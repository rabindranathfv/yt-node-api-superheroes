const express = require("express");
const { PORT } = require("./config/config");

const PORT_APP = PORT || 5000;

const app = express();

app.listen(PORT_APP, () => {
  console.log(`api is running in enviroment ${process.env.NODE_ENV} at ${PORT_APP}`);
});
