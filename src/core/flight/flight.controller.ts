import { Controller, Get, Inject, Query } from '@nestjs/common';
import { FlightSearchRequest, FlightSearchResult } from './flight.dto';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
  @Inject()
  private readonly service: FlightService;

  @Get()
  async search(@Query() req: FlightSearchRequest): Promise<FlightSearchResult> {
    return this.service.find(req);
  }
}
