import express from "express";
// import logger from "../config/logger";
import router from "../routes/";
import cors from "cors";

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(router);

let server = app.listen(process.env.PORT || 3000);
server.setTimeout(5000000);
// logger.info("Iniciou...");
