import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Flight } from "./flight.entity";

@Entity("bookings")
export class Booking extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Flight, (flight) => flight.outcoming)
  @JoinColumn()
  from: Flight;

  @ManyToOne(() => Flight, (flight) => flight.incoming)
  @JoinColumn()
  to: Flight;

  @Column()
  date_from: Date;

  @Column()
  date_to: Date;
}