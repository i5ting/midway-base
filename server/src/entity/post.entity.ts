import { Entity, Column } from "typeorm";
import { BaseEntity } from "../core/entities/base.entity";

@Entity()
export class Post extends BaseEntity {

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  userId: string;
}
