import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class DefaultEntity {
  @Field(() => Int)
  id: number;
}
