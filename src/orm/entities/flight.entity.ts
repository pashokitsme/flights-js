import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("flights")
export class Flight extends BaseEntity {
  @Column({ unique: true })
  @Index()
  flight_code: string;

  @Column()
  time_from: Date;

  @Column()
  time_to: Date;

  @Column()
  cost: number;
}