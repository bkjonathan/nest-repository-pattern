import { Injectable } from '@nestjs/common'
import { DeepPartial, Repository, ObjectLiteral } from 'typeorm'
import { BaseRepository } from '@common/common/interfaces'

@Injectable()
export abstract class TypeormRepository<T extends ObjectLiteral> extends Repository<T> implements BaseRepository<T> {
  findAll(): Promise<T[] | null> {
    return this.find()
  }

  findById(id: number): Promise<T | null> {
    return this.findOneBy({ id } as never)
  }

  store(payload: DeepPartial<T> | T): Promise<T> {
    payload = { ...payload, createdAt: new Date().toISOString() }
    const result = this.create(payload)
    return this.save(result)
  }

  async updateOne(id: number, payload: DeepPartial<T>): Promise<T | undefined> {
    const result = await this.findById(id)
    if (!result) return undefined
    Object.assign(result, payload, { updatedAt: new Date().toISOString() })
    return this.save(result)
  }
  async destroy(id: number): Promise<boolean> {
    return !!(await this.delete(id))
  }
}
