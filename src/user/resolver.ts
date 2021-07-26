import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import { Pizza } from "../pizza/model";

import { UserInput } from "./input/add.input";
import { User } from "./model";

@Resolver(of => User)
export class UserResolver {
  @InjectRepository(Pizza)
  pizzaRepository: Repository<Pizza>;

  @InjectRepository(User)
  userRepository: Repository<User>;

  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Mutation(returns => User)
  addUser(@Arg("userInput") userInput: UserInput): Promise<User> {
    return this.userRepository.save(userInput);
  }
}
