import "reflect-metadata";
import express, { Response } from "express";
import config from "config";
import Container from "typedi";
import { useContainer } from "typeorm";

import * as initializers from "./initializers";
import { Initializer } from "./initializers/initializer.type";

useContainer(Container);

const port = parseInt(config.get("port"));

const app = express();
app.get("/", (_, res: Response) => res.redirect("/graphql"));

Container.set("app", app);

const start = async () => {
  await Promise.all(
    Object.values(initializers).map(initializer =>
      Container.get<Initializer>(initializer).init()
    )
  );
  app.listen(port, () => {
    console.log("App is running");
  });
};

start();
