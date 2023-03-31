import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Booking } from "./booking.entity";
import { Station } from "./station.entity";

@Entity("flights")
export class Flight extends BaseEntity {
  @Column({ unique: true })
  @Index()
  flight_code: string;

  @OneToOne(() => Station)
  @JoinColumn({ name: "from_id" })
  from: Station;

  @OneToOne(() => Station)
  @JoinColumn({ name: "to_id" })
  to: Station;

  @OneToMany(() => Booking, (booking) => booking.from)
  outcoming: Booking[];

  @OneToMany(() => Booking, (booking) => booking.to)
  incoming: Booking[];

  @Column("time")
  time_from: Date;

  @Column("time")
  time_to: Date;

  @Column()
  cost: number;
}