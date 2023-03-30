import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("stations")
export class Station extends BaseEntity {
  @Column()
  city: string;

  @Column()
  iata: string;

  @Column()
  name: string;
}