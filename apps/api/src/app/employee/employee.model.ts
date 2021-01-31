import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class Employee {
    @Field({ nullable: true })
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    jobTitle: string;

    @Field(Int)
    age: number;

    @Field({ nullable: true })
    userName: string;

    @Field({ nullable: true })
    hireDate: string;
}