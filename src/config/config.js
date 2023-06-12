import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const { PORT, NODE_ENV, API_VERSION, ORIGIN, DB_HOST, DB_PORT, DB_NAME } = process.env;
