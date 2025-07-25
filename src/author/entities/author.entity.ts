import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '@/src/post/entities/post.entity';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;
  firstName?: string;
  lastName?: string;
  posts: Post[];
}
