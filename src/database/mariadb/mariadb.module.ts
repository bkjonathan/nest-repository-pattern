import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeORMConfigService } from '@app/database/mariadb/typeORM-config.service'
import { TypeormEntities } from '@app/database/mariadb/typeorm-entities'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfigService
    }),
    TypeOrmModule.forFeature(TypeormEntities)
  ]
})
export class MariadbModule {}
