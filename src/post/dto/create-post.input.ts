import { Post } from '@/src/post/entities/post.entity';
import { InputType, OmitType } from '@nestjs/graphql';

/**
 * This won't have any comments
 */
@InputType()
export class CreatePostInput extends OmitType(Post, ['id'], InputType) {}
