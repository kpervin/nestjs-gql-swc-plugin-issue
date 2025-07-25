import { Example } from '@/src/decorators/example/example.decorator';
import { DefaultEntity } from '@/src/defaults/default.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post extends DefaultEntity {
  @Field()
  title: string;

  /**
   * This comment will not appear
   */
  @Example()
  votes?: number;

  foo?: string;
  bar?: string;
}
