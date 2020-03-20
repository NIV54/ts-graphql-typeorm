import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root,
  Int
} from "type-graphql";
import { Pizza } from "./model";
import { PizzaInput } from "./input/add.input";

const pizzas: Pizza[] = [
  {
    size: 1,
    topping: "tomato"
  },
  {
    size: 2,
    topping: "olives"
  },
  {
    size: 3,
    topping: "corn"
  }
];

@Resolver(of => Pizza)
export class PizzaResolver {
  @Query(returns => [Pizza])
  pizzas(): Pizza[] {
    return pizzas;
  }

  @Mutation(returns => Pizza)
  addPizza(@Arg("pizzaInput") pizzaInput: PizzaInput): Pizza {
    pizzas.push(pizzaInput);
    return pizzaInput;
  }

  @FieldResolver()
  ovenTime(@Root() pizza: Pizza): number {
    return pizza.size ** 2;
  }
}
