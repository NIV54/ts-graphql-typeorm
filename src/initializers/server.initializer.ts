import { buildSchema } from "type-graphql";
import Container, { Inject } from "typedi";
import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { PizzaResolver } from "../pizza/resolver";

export default class ServerInitializer {
  @Inject("app")
  private app: Application;

  init = async () => {
    const schema = await buildSchema({
      resolvers: [PizzaResolver],
      container: Container
    });

    const server = new ApolloServer({
      schema,
      playground: true
    });

    server.applyMiddleware({ app: this.app });
  };
}
