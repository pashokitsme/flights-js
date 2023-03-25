import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/orm/entities/user.entity';
import { FlightController } from './flight/flight.controller';
import { FlightService } from './flight/flight.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, FlightController],
  providers: [UserService, FlightService]
})
export class CoreModule { }
