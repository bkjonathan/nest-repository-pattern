import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Admin, AdminSchema } from '@app/admin/entities/admin.schema'
import { Trader, TraderSchema } from '@app/trader/entities/trader.schema'
const allModels = [
  {
    name: Admin.name,
    schema: AdminSchema
  },
  {
    name: Trader.name,
    schema: TraderSchema
  }
]
@Global()
@Module({
  imports: [MongooseModule.forFeature(allModels)],
  exports: [MongooseModule]
})
export class MongooseModelModule {}
