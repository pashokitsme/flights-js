import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/orm/entities/user.entity';
import { FlightController } from './flight/flight.controller';
import { FlightService } from './flight/flight.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { StationsController } from './stations/stations.controller';
import { StationsService } from './stations/stations.service';
import { Station } from 'src/orm/entities/station.entity';
import { Booking } from 'src/orm/entities/booking.entity';
import { Flight } from 'src/orm/entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Station, Booking, Flight])],
  controllers: [UserController, FlightController, StationsController],
  providers: [UserService, FlightService, StationsService]
})
export class CoreModule { }
