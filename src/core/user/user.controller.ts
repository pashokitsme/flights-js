import { Body, Controller, Get, HttpCode, Inject, Post, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/orm/entities/user.entity';
import { BearerExtractor, ExtractUser } from '../auth.guard';
import { LoginRequestDto, LoginResponseDto, RegisterRequestDto, UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  @Inject()
  private readonly service: UserService;

  @Post('register')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor(''))
  async register(@UploadedFile() @Body() req: RegisterRequestDto): Promise<{ api_token: string }> {
    const user = await this.service.create(req);
    return { api_token: user.api_token };
  }

  @Post('login')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor(''))
  async login(@UploadedFile() @Body() req: LoginRequestDto): Promise<{ api_token: string }> {
    let user = await this.service.single(req.phone, req.password);
    if (user == null) {
      throw new UnauthorizedException();
    }
    let token = (await this.service.authorize(user)).api_token;
    return { 'api_token': token };
  }

  @Get('user')
  @UseGuards(BearerExtractor)
  @HttpCode(200)
  me(@ExtractUser() user: User): UserDto {
    return UserDto.fromModel(user)
  }
}
