import { BaseService } from "./base.service";
import {
  MidwayWebRouterService,
  Controller,
  Inject,
  Get,
  Del,
  Put,
  Post,
  Body,
  Param,
  // Query,
} from "@midwayjs/core";
import { Context } from "@midwayjs/koa";
import { BaseEntity } from "../core/entities/base.entity";

@Controller("/base")
export abstract class BaseController<T extends BaseService<BaseEntity>> {
  @Inject()
  ctx: Context;

  @Inject()
  webRouterService: MidwayWebRouterService;

  @Inject()
  service: T;

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
  async create(@Body() user: BaseEntity) {
    console.log(" create");
    console.dir(user);
    const a = await this.service.save(user);

    return a;
  }

  @Get("/")
  async home(
    // @Query("q") filter: string,
    // @Query("_order") order: "DESC" | "ASC",
    // @Query("_sort") sort: string,
    // @Query("_end") end: number
  ) {

    // _end: 25
    // _order: DESC
    // _sort: id
    // _start: 0
    // const query = this.ctx.query;

    // console.dir(query);
    console.log(" all");

    const {_start, _end, _order, _sort, ...filter} = this.ctx.query;
    console.dir(_start);
    console.dir(_end);
    console.dir(filter);
    console.dir(_order);
    console.dir(_sort);

    const a = await this.service.find(
      _start,
      _end,
      _order,
      _sort,
      filter
    );

    this.ctx.set("Content-Range", `users 0-10/${a.length}`);
    this.ctx.set("Access-Control-Expose-Headers", `Content-Range`);

    this.ctx.set("X-Total-Count", `${a.length}`);
    this.ctx.set("Access-Control-Expose-Headers", `X-Total-Count`);

    return a;

  }

}
