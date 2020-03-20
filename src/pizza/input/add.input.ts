import { Pizza } from "../model";
import { Field, InputType } from "type-graphql";

@InputType()
export class PizzaInput implements Pizza {
  @Field()
  size: number;

  @Field()
  topping: string;
}
