import { ObjectType, Field, ID } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

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
}
