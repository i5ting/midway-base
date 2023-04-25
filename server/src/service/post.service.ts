import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Post } from "../entity/post.entity";
import { Repository } from "typeorm";
import { BaseService } from "../core/base.service";

@Provide()
export class PostService extends BaseService<Post> {
  @InjectEntityModel(Post)
  model: Repository<Post>;
}
