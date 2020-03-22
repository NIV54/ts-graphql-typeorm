import { Pizza } from "../model";
import { Field, InputType } from "type-graphql";

@InputType()
export class PizzaInput implements Omit<Pizza, "id"> {
  @Field()
  size: number;

  @Field()
  topping: string;
}
