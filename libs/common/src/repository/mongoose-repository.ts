import { BadRequestException, Injectable } from '@nestjs/common'
import { Model, Promise } from 'mongoose'
import { BaseRepository } from '@common/common/interfaces'

@Injectable()
export abstract class MongooseRepository<T> implements BaseRepository<T> {
  protected constructor(private readonly model: Model<T>) {}

  findAll(): Promise<T[] | null> {
    return this.model.find()
  }

  findById(_id: string): Promise<T | null> {
    return this.model.findOne({ _id })
  }

  store(payload: Record<string, any>): Promise<T> {
    return this.model.create(payload)
  }

  async updateOne(_id: string, payload: Record<string, any>): Promise<T | undefined> {
    const result = await this.model.findOneAndUpdate({ _id }, payload, { new: true })
    if (!result) throw new BadRequestException('ID Not Found')
    return result
  }

  async destroy(_id: string): Promise<boolean> {
    try {
      const result = await this.model.findOneAndDelete({ _id })
      return !!result
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
