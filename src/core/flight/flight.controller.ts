import { Controller, Get, Inject, Query } from '@nestjs/common';
import { FlightSearchRequest } from './flight.dto';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
  @Inject()
  private readonly service: FlightService;

  @Get()
  async search(@Query() data: FlightSearchRequest): Promise<any> {
    return data;
  }
}
