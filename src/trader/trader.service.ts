import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTraderDto } from './dto/create-trader.dto'
import { UpdateTraderDto } from './dto/update-trader.dto'
import { Trader } from '@app/trader/entities/trader.schema'
// import { TraderTypeormRepository } from '@app/trader/trader-typeorm.repository'
import { TraderMongooseRepository } from '@app/trader/trader-mongoose.repository'

@Injectable()
export class TraderService {
  constructor(private readonly traderRepository: TraderMongooseRepository) {}
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

  findOne(id: string): Promise<Trader | null> {
    return this.traderRepository.findById(id)
  }

  async update(id: string, updateTraderDto: UpdateTraderDto): Promise<Trader> {
    try {
      return await this.traderRepository.updateOne(id, updateTraderDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  remove(id: string) {
    return this.traderRepository.destroy(id)
  }
}
