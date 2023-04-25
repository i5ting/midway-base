import { Entity, Column } from "typeorm";

import { BaseEntity } from "../core/entities/base.entity";

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  username: string;
  //
  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @Column()
  company: string;

}
