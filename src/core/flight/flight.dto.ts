import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, Max, Min, ValidateIf } from "class-validator";
import { Flight } from "src/orm/entities/flight.entity";
import { MoreThan } from "typeorm";

export class FlightSearchResult {
  to: Flight[];
  to_date: Date;
  back?: Flight;
  back_date?: Date;
}

export class FlightSearchRequest {
  @IsNotEmpty()
  readonly from: string;

  @IsNotEmpty()
  readonly to: string;

  @Type(() => Date)
  @IsDate()
  readonly date1: Date;

  @ValidateIf((_, value) => value !== undefined)
  @Type(() => Date)
  @IsDate()
  readonly date2?: Date | null;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(8)
  readonly passengers: number;
}