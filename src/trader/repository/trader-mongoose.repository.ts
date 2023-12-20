import { Trader } from '@app/trader/entities/trader.schema'
import { Model } from 'mongoose'
import { MongooseRepository } from '@common/common/repository/mongoose-repository'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TraderMongooseRepository extends MongooseRepository<Trader> {
  constructor(@InjectModel(Trader.name) private readonly traderModel: Model<Trader>) {
    super(traderModel)
  }
}
