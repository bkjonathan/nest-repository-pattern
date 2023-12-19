import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TraderService } from './trader.service'
import { CreateTraderDto } from './dto/create-trader.dto'
import { UpdateTraderDto } from './dto/update-trader.dto'

@Controller('trader')
export class TraderController {
  constructor(private readonly traderService: TraderService) {}

  @Post()
  create(@Body() createTraderDto: CreateTraderDto) {
    return this.traderService.create(createTraderDto)
  }

  @Get()
  findAll() {
    return this.traderService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traderService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraderDto: UpdateTraderDto) {
    return this.traderService.update(id, updateTraderDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traderService.remove(id)
  }
}
