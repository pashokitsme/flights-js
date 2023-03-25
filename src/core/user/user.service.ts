import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/orm/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterRequestDto } from './user.dto';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly users: Repository<User>;

  single(phone: number, password: string): Promise<User | null> {
    return this.users.findOne({ where: { phone: phone, password: password } })
  }

  authorize(user: User): Promise<User> {
    user.api_token = crypto.randomUUID().replaceAll('-', '');
    return user.save()
  }

  async authenticate(bearer: string | undefined | null): Promise<User | null> {
    if (bearer == null || bearer == undefined) return null;
    bearer = bearer.replace('Bearer ', '');
    return await this.users.findOne({ where: { api_token: bearer } });
  }

  async create(req: RegisterRequestDto): Promise<User> {
    if (await this.users.exist({ where: [{ phone: req.phone }, { document_number: req.document_number }] })) {
      throw new BadRequestException("That user already exists");
    }
    let entity = this.users.create(req);
    entity.created_at = new Date();
    let user = await this.users.save(entity);
    return await this.authorize(user);
  }
}
