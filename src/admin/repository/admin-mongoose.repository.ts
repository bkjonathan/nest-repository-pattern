import { Injectable } from '@nestjs/common'
import { MongooseRepository } from '@common/common/repository/mongoose-repository'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Admin } from '@app/admin/entities/admin.schema'

@Injectable()
export class AdminMongooseRepository extends MongooseRepository<Admin> {
  constructor(@InjectModel(Admin.name) private readonly traderModel: Model<Admin>) {
    super(traderModel)
  }
}
