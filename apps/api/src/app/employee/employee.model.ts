import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class Employee {
    @Field({ nullable: true })
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    jobTitle: string;

    @Field({ nullable: true })
    age: number;

    @Field({ nullable: true })
    userName: string;

    @Field({ nullable: true })
    hireDate: string;
}