import { Field, ObjectType } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Pizza } from "../pizza/model";

@Entity({ name: "Users" })
@ObjectType({ description: "User with toppings" })
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Field(type => [Pizza])
  @OneToMany(type => Pizza, pizza => pizza.user, { lazy: true })
  @TypeormLoader()
  pizzas: Pizza[];
}
