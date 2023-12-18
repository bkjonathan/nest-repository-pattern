import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Trader } from '@app/trader/entities/trader.entity'

export const TypeormEntities = [Trader]
@Global()
@Module({
  imports: [TypeOrmModule.forFeature(TypeormEntities)],
  exports: [TypeOrmModule]
})
export class MariadbEntitiesModule {}
