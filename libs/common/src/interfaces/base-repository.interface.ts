import { DeepPartial } from 'typeorm'

export interface BaseRepository<T> {
  findAll(): Promise<T[] | null>
  findById(id: string | number): Promise<T | null>
  store(payload: DeepPartial<T> | T): Promise<T>
  updateOne(id: string | number, payload: DeepPartial<T>): Promise<T | undefined>
  destroy(id: number | string): Promise<boolean>
}
