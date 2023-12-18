import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Admin, AdminSchema } from '@app/admin/entities/admin.schema'
const allModels = [
  {
    name: Admin.name,
    schema: AdminSchema
  }
]
@Global()
@Module({
  imports: [MongooseModule.forFeature(allModels)],
  exports: [MongooseModule]
})
export class MongooseModelModule {}
