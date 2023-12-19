import { Module } from '@nestjs/common'
import { TraderService } from './trader.service'
import { TraderController } from './trader.controller'
import { TraderRepository } from '@app/trader/trader.repository'

@Module({
  controllers: [TraderController],
  providers: [TraderService, TraderRepository]
})
export class TraderModule {}
