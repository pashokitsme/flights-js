import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  phone: number;

  @Column()
  password: string;

  @Column({ unique: true })
  document_number: number;

  @Column({ unique: true })
  api_token: string;
}