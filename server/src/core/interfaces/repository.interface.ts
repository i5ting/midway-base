import { BaseEntity } from '../entities/base.entity';

export interface IRepository<T extends BaseEntity> {
  findAll(): Promise<any>;
  findById(id: number): Promise<any>;
  create(data: Partial<T>): Promise<any>;
  update(id: number, data: Partial<any>): Promise<any>;
  delete(id: number): Promise<void>;
}
