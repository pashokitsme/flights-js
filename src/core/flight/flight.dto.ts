import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, Max, Min } from "class-validator";
import { MoreThan } from "typeorm";

export class FlightSearchResult {
}

export class FlightSearchRequest {
  @IsNotEmpty()
  readonly from: string;

  @IsNotEmpty()
  readonly to: string;

  @Type(() => Date)
  @IsDate()
  readonly date1: Date;

  @Type(() => Date)
  @IsDate()
  readonly date2: Date;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(8)
  readonly passengers: number;
}