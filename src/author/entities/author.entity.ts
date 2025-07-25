import { DefaultEntity } from '@/src/defaults/default.entity';
import { Post } from '@/src/post/entities/post.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author extends DefaultEntity {
  /**
   * This comment will appear
   */
  firstName?: string;
  lastName?: string;
  posts: Post[];
}
