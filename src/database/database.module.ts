import { Module } from '@nestjs/common'
import { MariadbModule } from './mariadb/mariadb.module'
import { MongooseDbModule } from '@app/database/mongoose/mongooseDb.module'

@Module({
  imports: [MariadbModule, MongooseDbModule]
})
export class DatabaseModule {}
