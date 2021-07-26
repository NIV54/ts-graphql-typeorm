import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { buildSchema } from "type-graphql";
import Container, { Inject } from "typedi";

import { PizzaResolver } from "../pizza/resolver";
import { UserResolver } from "../user/resolver";

export default class ServerInitializer {
  @Inject("app")
  private app: Application;

  init = async () => {
    const schema = await buildSchema({
      resolvers: [PizzaResolver, UserResolver],
      container: Container
    });

    const server = new ApolloServer({
      schema,
      playground: true
    });

    server.applyMiddleware({ app: this.app });

    console.log("Server is running");
  };
}
