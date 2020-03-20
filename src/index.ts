import "reflect-metadata";

import express from "express";
import config from "config";
import Container from "typedi";
import ServerInitializer from "./initializers/server.initializer";

const app = express();
Container.set("app", app);
const port = parseInt(config.get("port"));

const start = async () => {
  await Container.get(ServerInitializer).init();
  console.log("Server is running");
  app.listen(port, () => {
    console.log("App is running");
  });
};

start();
