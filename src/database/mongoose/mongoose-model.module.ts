import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
const allModels = []
@Global()
@Module({
  imports: [MongooseModule.forFeature(allModels)],
  exports: [MongooseModule]
})
export class MongooseModelModule {}
