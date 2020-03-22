import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root
} from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Pizza } from "./model";
import { PizzaInput } from "./input/add.input";
import { Repository } from "typeorm";

@Resolver(of => Pizza)
export class PizzaResolver {
  @InjectRepository(Pizza)
  pizzaRepository: Repository<Pizza>;

  @Query(returns => [Pizza])
  pizzas(): Promise<Pizza[]> {
    return this.pizzaRepository.find();
  }

  @Mutation(returns => Pizza)
  addPizza(@Arg("pizzaInput") pizzaInput: PizzaInput): Promise<Pizza> {
    return this.pizzaRepository.save(pizzaInput);
  }

  @FieldResolver()
  ovenTime(@Root() pizza: Pizza): number {
    return pizza.size ** 2;
  }
}
