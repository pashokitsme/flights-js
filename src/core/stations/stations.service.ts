import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Station } from 'src/orm/entities/station.entity';
import { Like, Repository } from 'typeorm';
import { StationDto, StationSearchingResult } from './station.dto';

@Injectable()
export class StationsService {
  @InjectRepository(Station)
  private readonly stations: Repository<Station>;

  async find(query: string): Promise<StationSearchingResult> {
    const query_ = Like(`%${query}%`);
    const res = await this.stations.findAndCount({ where: [{ iata: query_, }, { name: query_ }, { city: query_ }] })
    return { count: res[1], stations: res[0] };
  }
}
