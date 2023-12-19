import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTraderDto } from './dto/create-trader.dto'
import { UpdateTraderDto } from './dto/update-trader.dto'
import { Trader } from '@app/trader/entities/trader.entity'
import { TraderRepository } from '@app/trader/trader.repository'

@Injectable()
export class TraderService {
  constructor(private readonly traderRepository: TraderRepository) {}
  async create(createTraderDto: CreateTraderDto): Promise<Trader> {
    try {
      return await this.traderRepository.store(createTraderDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  findAll(): Promise<Trader[]> {
    return this.traderRepository.findAll()
  }

  findOne(id: number): Promise<Trader | null> {
    return this.traderRepository.findById(id)
  }

  async update(id: number, updateTraderDto: UpdateTraderDto): Promise<Trader> {
    try {
      return await this.traderRepository.updateOne(id, updateTraderDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  remove(id: number) {
    return this.traderRepository.destroy(id)
  }
}
