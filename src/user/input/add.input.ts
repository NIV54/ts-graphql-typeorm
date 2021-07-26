import { Field, InputType } from "type-graphql";

import { User } from "../model";

@InputType()
export class UserInput implements Omit<User, "id" | "pizzas"> {
  @Field()
  username: string;
  @Field()
  password: string;
}
