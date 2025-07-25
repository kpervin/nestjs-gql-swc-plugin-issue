import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements NestInterceptor {
  private logger = new Logger(ExampleInterceptor.name);

  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.debug(
      this.cls.isActive()
        ? 'The CLS Service is active.'
        : 'CLS Service missing.',
    );

    return next.handle();
  }
}
