import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import { User } from "../user/model";

import { PizzaInput } from "./input/add.input";
import { Pizza } from "./model";

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
    const { userId, ...input } = pizzaInput;
    const user = new User();
    user.id = userId;
    const pizza = this.pizzaRepository.create({
      ...input,
      user
    });
    return this.pizzaRepository.save(pizza);
  }

  @FieldResolver()
  ovenTime(@Root() pizza: Pizza): number {
    return pizza.size ** 2;
  }
}
