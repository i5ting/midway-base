import { Repository } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
import { IRepository } from '../interfaces/repository.interface';

export abstract class BaseRepository<T extends BaseEntity>
  implements IRepository<T>
{
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findById(id: any): Promise<T> {
    return await this.repository.findOne(id);
  }

  async create(data: any): Promise<unknown> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async update(id: number, data: Partial<unknown>): Promise<T> {
    await this.repository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
