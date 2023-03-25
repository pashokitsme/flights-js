
import { CanActivate, createParamDecorator, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class BearerExtractor implements CanActivate {
  @Inject()
  private readonly users: UserService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const bearer = request.headers['authorization'];
    const user = await this.users.authenticate(bearer);
    request.user = user;
    if (user == null) throw new UnauthorizedException('Invalid bearer token');
    return true;
  }
}

export const ExtractUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest().user;
    if (user == null) throw new UnauthorizedException('Invalid bearer token');
    return user;
  }
);
