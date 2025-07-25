import { CanActivate, Injectable, Logger } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleGuard implements CanActivate {
  private logger = new Logger(ExampleGuard.name);

  constructor(private readonly cls: ClsService) {}
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.debug(
      this.cls.isActive()
        ? 'The CLS Service is active.'
        : 'CLS Service missing.',
    );
    return true;
  }
}
