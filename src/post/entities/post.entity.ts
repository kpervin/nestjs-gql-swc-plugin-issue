import { Example } from '@/src/decorators/example/example.decorator';
import { DefaultEntity } from '@/src/defaults/default.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post extends DefaultEntity {
  /**
   * This comment will appear under the Post type,
   * but will not under CreatePostInput
   */
  @Field() // This is required to annotate a single field or else OmitType throws
  title: string;

  @Example()
  votes?: number;

  foo?: string;
  bar?: string;
}
