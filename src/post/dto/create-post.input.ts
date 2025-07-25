import { Post } from '@/src/post/entities/post.entity';
import { InputType, OmitType } from '@nestjs/graphql';

/**
 * This comment will not appear, and various fields will be missing
 * that are not annotated.
 */
@InputType()
export class CreatePostInput extends OmitType(Post, ['id'], InputType) {}
