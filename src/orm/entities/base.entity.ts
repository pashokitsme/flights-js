import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity as Entity } from "typeorm";

export abstract class BaseEntity extends Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}