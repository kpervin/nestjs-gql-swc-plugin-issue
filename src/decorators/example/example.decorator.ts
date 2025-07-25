import { applyDecorators, SetMetadata } from '@nestjs/common';

export const Example = (...args: string[]) =>
  applyDecorators(SetMetadata('example', args));
