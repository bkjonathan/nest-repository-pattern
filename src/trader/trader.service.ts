import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTraderDto } from './dto/create-trader.dto'
import { UpdateTraderDto } from './dto/update-trader.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Trader } from '@app/trader/entities/trader.entity'
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm'

@Injectable()
export class TraderService {
  constructor(@InjectRepository(Trader) private readonly traderRepository: Repository<Trader>) {}
  async create(createTraderDto: CreateTraderDto): Promise<InsertResult> {
    try {
      return this.traderRepository.insert(createTraderDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  findAll(): Promise<Trader[]> {
    return this.traderRepository.find()
  }

  findOne(id: number): Promise<Trader | null> {
    return this.traderRepository.findOneBy({ id })
  }

  async update(id: number, updateTraderDto: UpdateTraderDto): Promise<UpdateResult> {
    try {
      return this.traderRepository.update(id, updateTraderDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  remove(id: number): Promise<DeleteResult> {
    return this.traderRepository.delete(id)
  }
}
