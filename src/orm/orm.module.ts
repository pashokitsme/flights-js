import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Flight } from './entities/flight.entity';
import { Station } from './entities/station.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'flights-js',
      entities: [User, Station, Flight, Booking]
    })
  ]
})
export class OrmModule { }
