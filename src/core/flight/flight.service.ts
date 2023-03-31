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
    const to = await this.flights.find({ where: { from: { iata: req.from }, to: { iata: req.to } } });
    let from = undefined;
    if (req.date2 != null) {
      from = await this.flights.find({ where: { from: { iata: req.to }, to: { iata: req.from } } });
    }
    return { to: to, to_date: req.date1, back: from, back_date: req.date2 };
  }
}
