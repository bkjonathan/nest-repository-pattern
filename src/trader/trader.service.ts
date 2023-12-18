import { Injectable } from '@nestjs/common'
import { CreateTraderDto } from './dto/create-trader.dto'
import { UpdateTraderDto } from './dto/update-trader.dto'

@Injectable()
export class TraderService {
  create(createTraderDto: CreateTraderDto) {
    return 'This action adds a new trader' + createTraderDto
  }

  findAll() {
    return `This action returns all trader`
  }

  findOne(id: number) {
    return `This action returns a #${id} trader`
  }

  update(id: number, updateTraderDto: UpdateTraderDto) {
    return `This action updates a #${id} trader ${updateTraderDto}`
  }

  remove(id: number) {
    return `This action removes a #${id} trader`
  }
}
