import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1680822695278_3091',
  koa: {
    port: 7001,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  cors: {
    // 允许跨域的方法，【默认值】为 GET,HEAD,PUT,POST,DELETE,PATCH
    allowMethods: '*',
    // 设置 Access-Control-Allow-Origin 的值，【默认值】会获取请求头上的 origin
    // 也可以配置为一个回调方法，传入的参数为 request，需要返回 origin 值
    // 例如：http://test.midwayjs.org
    // 如果设置了 credentials，则 origin 不能设置为 *
    origin: '*',
    // 设置 Access-Control-Allow-Headers 的值，【默认值】会获取请求头上的 Access-Control-Request-Headers
    allowHeaders: '*',
    // 设置 Access-Control-Expose-Headers 的值
    exposeHeaders: '*',
    // 设置 Access-Control-Allow-Credentials，【默认值】false
    // 也可以配置为一个回调方法，传入的参数为 request，返回值为 true 或 false
    credentials: false,
    // 是否在执行报错的时候，把跨域的 header 信息写入到 error 对的 headers 属性中，【默认值】false
    keepHeadersOnError: true,
    // 设置 Access-Control-Max-Age
    maxAge: 36000,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.01',
        port: 3306,
        username: 'root',
        password: '',
        database: 'demo',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: true,

        // 或者扫描形式
        entities: ['**/entity/*.entity{.ts,.js}'],
      },
    },
  },
} as MidwayConfig;
