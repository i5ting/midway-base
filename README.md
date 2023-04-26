# midway-base

我的想法是根据TypeORM模型定义，快速生成crud

1）配置数据源

```
{
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'demo',
  synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
  logging: true,
}
```

2）定义模型

比如定义如下

```
{
  User:{
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: string,
  },
  Post:{
    name: string,
    title: string,
    body: string,
    userId: User.id,
  }
}
```

如果想定制，可以扩展属性。

```
{
  User:{
    name: string,
    username: {
      type: string,
      nullable: true,
      default: "i5ting"
    },
  }
}
```

3）执行命令，生成代码

> $ base abc.json

4）预览

> $ npm run dev

