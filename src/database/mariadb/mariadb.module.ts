import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeORMConfigService } from '@app/database/mariadb/typeORM-config.service'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfigService
    })
  ]
})
export class MariadbModule {}
