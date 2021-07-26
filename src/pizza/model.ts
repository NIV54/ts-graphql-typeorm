import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "../user/model";

@Entity({ name: "Pizzas" })
@ObjectType({ description: "Pizza with toppings" })
export class Pizza {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  size: number;

  @Column()
  @Field()
  topping: string;

  @Field()
  ovenTime?: number;

  @ManyToOne(type => User, user => user.pizzas, { lazy: true })
  user: User;
}
