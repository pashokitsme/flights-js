import { Controller, Get, Inject, Injectable, Param, Query, Res } from '@nestjs/common';
import { StationDto, StationSearchingResult } from './station.dto';
import { StationsService } from './stations.service';

@Controller('/station')
export class StationsController {
  @Inject()
  private readonly service: StationsService;

  @Get()
  async search(@Query('query') query: string): Promise<StationSearchingResult> {
    let result = await this.service.find(query);
    return { count: result.count, stations: result.stations.map(StationDto.from) };
  }
}
