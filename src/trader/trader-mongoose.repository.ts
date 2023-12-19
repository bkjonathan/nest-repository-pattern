import { BaseRepository } from '@common/common/interfaces'
import { Trader } from '@app/trader/entities/trader.schema'
import { Model, Promise } from 'mongoose'
import { DeepPartial } from 'typeorm'
import { InjectModel } from '@nestjs/mongoose'

export class TraderMongooseRepository implements BaseRepository<Trader> {
  constructor(@InjectModel(Trader.name) private readonly traderModel: Model<Trader>) {}
  findAll(): Promise<Trader[] | null> {
    return this.traderModel.find()
  }

  findById(_id: string): Promise<Trader | null> {
    return this.traderModel.findOne({ _id })
  }

  store(payload: DeepPartial<Trader> | Trader): Promise<Trader> {
    return this.traderModel.create(payload)
  }

  updateOne(_id: string, payload: DeepPartial<Trader>): Promise<Trader | undefined> {
    return this.traderModel.findOneAndUpdate({ _id }, payload, { new: true })
  }

  destroy(_id: string): Promise<boolean> {
    return this.traderModel.findOneAndDelete({ _id })
  }
}
