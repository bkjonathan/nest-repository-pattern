import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeormConfigService } from '@app/database/mariadb/typeorm-config.service'
import { MariadbEntitiesModule } from '@app/database/mariadb/mariadb-entities.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService
    }),
    MariadbEntitiesModule
  ],
  exports: [TypeOrmModule]
})
export class MariadbModule {}
