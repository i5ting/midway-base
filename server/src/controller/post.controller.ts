import {
  Controller,
  Inject,
  Get,
  Del,
  Put,
  Post,
  Body,
  Param,
  Query,
} from "@midwayjs/core";
import { PostService } from "../service/post.service";
import { Context } from "@midwayjs/koa";
import { Post as PostEntity } from "../entity/post.entity";

@Controller("/posts")
export class PostController {
  @Inject()
  ctx: Context;

  @Inject()
  service: PostService;

  @Del("/:id")
  async findOne2(@Param("id") uid: string) {
    console.dir(uid);

    const a = await this.service.delete(uid);
    console.dir(a[0]);

    return a;
  }

  @Put("/:id")
  async update(@Param("id") uid: string) {
    console.log("put uid = ") + uid;

    const body = this.ctx.request.body;

    console.dir(body);

    let user = await this.service.update(uid, body);

    return user;
  }

  @Get("/:id")
  async findOne(@Param("id") uid: string) {
    console.log(" uid = ") + uid;
    const a = await this.service.findById(uid);
    // console.dir(a[0]);

    return a;
  }

  @Post("/")
  async create(@Body() user: PostEntity) {
    console.log(" create");
    console.dir(user);
    const a = await this.service.save(user);

    return a;
  }

  @Get("/")
  async home(
    @Query("_filter") filter: string,
    @Query("_order") order: "DESC" | "ASC",
    @Query("_page") page: number,
    @Query("_perPage") perPage: number,
    @Query("_sort") sort: string
  ) {
    const query = this.ctx.query;

    console.dir(query);
    console.log(" all");

    console.dir(page);
    console.dir(perPage);
    console.dir(filter);
    console.dir(order);
    console.dir(sort);

    const a = await this.service.find(
      page,
      perPage,
      filter,
      order,
      sort
    );

    this.ctx.set("Content-Range", `users 0-10/${a.length}`);
    this.ctx.set("Access-Control-Expose-Headers", `Content-Range`);

    this.ctx.set("X-Total-Count", `${a.length}`);
    this.ctx.set("Access-Control-Expose-Headers", `X-Total-Count`);

    return a;
  }
}
