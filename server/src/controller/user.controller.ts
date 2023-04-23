import { Controller, Inject, Get } from '@midwayjs/core';
import { PhotoService } from '../service/photo.service';

@Controller('/users')
export class UserController {
  @Inject()
  userService: PhotoService;

  @Get('/')
  async home() {
    console.log(' all');
    const a = await this.userService.findPhotos();
    return a;
  }
}
