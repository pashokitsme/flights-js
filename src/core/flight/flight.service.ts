import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'src/orm/entities/flight.entity';
import { Repository } from 'typeorm';
import { FlightSearchRequest, FlightSearchResult } from './flight.dto';

@Injectable()
export class FlightService {
  @InjectRepository(Flight)
  private readonly flights: Repository<Flight>;

  @Get()
  async find(req: FlightSearchRequest): Promise<FlightSearchResult> {
    this.flights.find({ where: { to } })
    return undefined;
  }
}
