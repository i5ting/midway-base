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
import { UserService } from "../service/user.service";
import { Context } from "@midwayjs/koa";
import { User } from "../entity/user.entity";

@Controller("/users")
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  service: UserService;


  @Inject()
  webRouterService: MidwayWebRouterService;


  async onReady() {
    console.dir('onReady'+this)
    console.dir('userPostController onReady')

     this.webRouterService.addRouter(async (ctx) => {
      return 'hello world';
    }, {
      url: '/2',
      requestMethod: 'GET',
    });


  }


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

  // @Get("/:id")
  // async findOne(@Param("id") uid: string) {
  //   console.log(" uid = ") + uid;
  //   const a = await this.service.findById(uid);
  //   // console.dir(a[0]);

  //   return a;
  // }

  @Post("/")
  async create(@Body() user: User) {
    console.log(" create");
    console.dir(user);
    const a = await this.service.create(user);

    return a;
  }

  @Get("/")
  async home(

  ) {
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
