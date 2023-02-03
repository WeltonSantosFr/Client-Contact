import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entity";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  registry_date: Date;

  @Column({ default: true })
  isActive: boolean;

  @JoinColumn()
  @ManyToOne(() => Client, { eager: true })
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
