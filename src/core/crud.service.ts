import { Repository } from 'typeorm';
import { BaseEntity } from './entities/base.entity';

export abstract class CrudService<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findById(id: any): Promise<T> {
    return await this.repository.findOne(id);
  }

  async create(data: any): Promise<T[]> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async update(id: string, data: any): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
