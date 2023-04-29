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

  async _getWhere(tableName, filter){
    let where = ""
    Object.keys(filter).map(function(i){
      return where === '' ? where+=`${tableName}.${i} = :${i}`:where+=` and ${tableName}.${i} = :${i}`
    })
    return where
  }

  async find (
    _start: any,
    _end: any,
    _order: any,
    _sort: any,
    _filter: any
  ) {
    console.dir(this.model)
    console.dir(_start);
    console.dir(_end);
    console.dir(_filter);
    console.dir(_order);
    console.dir(_sort);

    let tableName = this.constructor.name.replace('Service',"").toLowerCase()
    console.dir(tableName)

    let where = await this._getWhere(tableName, _filter)

    console.dir(where)

    let firstPhoto = await this.model
      .createQueryBuilder(tableName)
      .where(where, _filter)
      // .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
      .orderBy(_sort, _order || "ASC")
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
