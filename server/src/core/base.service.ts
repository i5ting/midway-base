import { BaseEntity } from "../core/entities/base.entity";
import { Repository } from 'typeorm';

export abstract class BaseService<T extends BaseEntity> {
  model: Repository<T>;

  async findAll(): Promise<T[]> {
    return await this.model.find();
  }

  async findById(id: any): Promise<T> {
    return await this.model.findOne(id);
  }

  async save(data: any): Promise<T[]> {
    return this.create(data);
  }

  async create(data: any): Promise<T[]> {
    const entity = this.model.create(data);
    return await this.model.save(entity);
  }

  async update(id: string, data: any): Promise<T> {
    await this.model.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.model.delete(id);
  }

  async find (
    page: number,
    perPage: number,
    filter: string,
    order: "DESC" | "ASC",
    sort: string
  ) {
    console.dir(this.model)
    console.dir(page);
    console.dir(perPage);
    console.dir(filter);
    console.dir(order);
    console.dir(sort);

    let firstPhoto = await this.model
      .createQueryBuilder("user")
      // .where("photo.isPublished = true")
      // .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
      .orderBy(sort, order || "ASC")
      // .skip(5)
      .take(10)
      // .setParameters({ photoName: "My", bearName: "Mishka" })
      .getMany();
    // find All
    // let firstPhoto = await this.model.find({
    //   where: {},
    // });
    console.log("First photo from the db: ", firstPhoto);

    return firstPhoto;
  }
}
