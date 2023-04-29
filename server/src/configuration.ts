import { join } from 'path';
import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as crossDomain from "@midwayjs/cross-domain";
import * as view from '@midwayjs/view-nunjucks';
import * as orm from '@midwayjs/typeorm';
import { ReportMiddleware } from './middleware/report.middleware';
import { WeatherErrorFilter } from './filter/weather.filter';

@Configuration({
  imports: [
    orm,
    koa,
    crossDomain,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    view,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    console.dir("on ContainerLifeCycle ready..")
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([WeatherErrorFilter]);
  }
}
