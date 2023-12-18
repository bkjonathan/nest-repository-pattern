import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseConfigService } from '@app/database/mongoose/mongoose-config.service'
import { MongooseModelModule } from '@app/database/mongoose/mongoose-model.module'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),
    MongooseModelModule
  ],
  exports: [MongooseModule]
})
export class MongooseDbModule {}
