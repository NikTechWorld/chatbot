import express from "express";
import http from "http";
import config from "config";
import cors from "cors";
import { Server } from "socket.io";
import logger from "./utils/logger";
import { version } from "../package.json";
import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const crosOrigin = config.get<string>("crosOrigin");

const app = express();

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: crosOrigin, methods: ["GET", "POST"] },
});

app.get("/", (req, res) =>
  res.send(`server is UP and running on version ${version}!`)
);
server.listen(port, () => {
  logger.info(`server[ version-${version} ] app listening on port ${port}!`);
  logger.info(`http://${host}:${port}`);
  socket({ io });
});
