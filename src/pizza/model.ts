import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Pizza with toppings" })
export class Pizza {
  @Field()
  size: number;

  @Field()
  topping: string;

  @Field()
  ovenTime?: number;
}
