import { Station } from "src/orm/entities/station.entity";

export class StationSearchingResult {
  count: number;
  stations: StationDto[];
}

export class StationDto {
  id: number;
  name: string;
  city: string;
  iata: string;

  static from(station: Station): StationDto {
    return {
      id: station.id,
      name: station.name,
      city: station.city,
      iata: station.iata
    };
  }
}