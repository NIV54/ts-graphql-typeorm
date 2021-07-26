import { Field, InputType } from "type-graphql";

import { Pizza } from "../model";

@InputType()
export class PizzaInput implements Omit<Pizza, "id" | "user"> {
  @Field()
  size: number;

  @Field()
  topping: string;

  @Field()
  userId: number;
}
