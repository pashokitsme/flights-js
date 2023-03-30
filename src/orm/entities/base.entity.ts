import { Exclude } from "class-transformer";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity as Entity } from "typeorm";

export abstract class BaseEntity extends Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Exclude()
  updated_at: Date;
}