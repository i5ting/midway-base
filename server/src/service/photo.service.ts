import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Photo } from '../entity/photo.entity';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  async findPhotos() {
    // find All
    let firstPhoto = await this.photoModel.findOne({
      where: {
        id: 1,
      },
    });
    console.log('First photo from the db: ', firstPhoto);

    return firstPhoto;
  }
}
