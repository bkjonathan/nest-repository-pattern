import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Trader } from '@app/trader/entities/trader.entity'
import { Admin } from '@app/admin/entities/admin.entity'

export const TypeormEntities = [Trader, Admin]
@Global()
@Module({
  imports: [TypeOrmModule.forFeature(TypeormEntities)],
  exports: [TypeOrmModule]
})
export class MariadbEntitiesModule {}
