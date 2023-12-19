import { Module } from '@nestjs/common'
import { TraderService } from './trader.service'
import { TraderController } from './trader.controller'
import { TraderTypeormRepository } from '@app/trader/trader-typeorm.repository'
import { TraderMongooseRepository } from '@app/trader/trader-mongoose.repository'

@Module({
  controllers: [TraderController],
  providers: [TraderService, TraderTypeormRepository, TraderMongooseRepository]
})
export class TraderModule {}
