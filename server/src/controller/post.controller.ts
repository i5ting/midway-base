import {
  Controller,
  Inject,
  Get,
  // Del,
  // Put,
  // Post,
  // Body,
  // Param,
  // Query,
} from "@midwayjs/core";
import { PostService } from "../service/post.service";
import { Context } from "@midwayjs/koa";
import { BaseController } from "../core/base.controller";


@Controller("/posts")
export class PostController  extends BaseController<PostService>{
  // constructor(){
  //   console.dir("PostController")
  //   super()
  // }
  @Inject()
  ctx: Context;

  @Inject()
  service: PostService;

  async onReady() {
    console.dir('onReady'+this)
    console.dir('PostController onReady')
  }

  @Get("/test")
  async find121() {
    return "test";
  }

}
