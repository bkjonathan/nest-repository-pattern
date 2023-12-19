import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Trader } from '@app/trader/entities/trader.entity'
import { DeleteResult, Repository } from 'typeorm'
import { CreateTraderDto } from '@app/trader/dto/create-trader.dto'
import { UpdateTraderDto } from '@app/trader/dto/update-trader.dto'

@Injectable()
export class TraderRepository extends Repository<Trader> {
  constructor(@InjectRepository(Trader) private readonly traderRepository: Repository<Trader>) {
    super(traderRepository.target, traderRepository.manager, traderRepository.queryRunner)
  }

  async findAll(): Promise<Trader[]> {
    return this.find()
  }

  async findById(id: number): Promise<Trader | null> {
    return this.findOneBy({ id: id })
  }

  async store(data: CreateTraderDto): Promise<Trader> {
    data = { ...data, createdAt: new Date().toISOString() } as never
    const result = this.create(data)
    return this.save(result)
  }

  async updateOne(id: number, data: UpdateTraderDto): Promise<Trader | undefined> {
    const result = await this.findById(id)
    data = { ...data, updatedAt: new Date().toISOString() } as never

    if (!result) return undefined
    Object.assign(result, data)
    return this.save(result)
  }

  async destroy(id: number): Promise<DeleteResult> {
    return await this.delete(id)
  }
}
