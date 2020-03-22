import { Service } from "typedi";
import { Connection, createConnection, ConnectionOptions } from "typeorm";
import config from "config";

import { Initializer } from "./initializer.type";

@Service()
export default class DbInitializer implements Initializer {
  private connectionOptions: ConnectionOptions;

  constructor() {
    this.connectionOptions = { ...config.get("db") };
  }

  init = async () => {
    await createConnection(this.connectionOptions);
    console.log("Connected to DB");
  };
}
