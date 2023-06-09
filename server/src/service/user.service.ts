import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm";

import { BaseService } from "../core/base.service";

@Provide()
export class UserService extends BaseService<User>{
  @InjectEntityModel(User)
  model: Repository<User>;

}
