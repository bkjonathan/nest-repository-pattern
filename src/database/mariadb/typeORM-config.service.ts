import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import {
  DEFAULT_TYPEORM_AUTOLOAD_ENTITIES,
  DEFAULT_TYPEORM_DATABASE,
  DEFAULT_TYPEORM_HOST,
  DEFAULT_TYPEORM_PASSWORD,
  DEFAULT_TYPEORM_PORT,
  DEFAULT_TYPEORM_SYNCHRONIZE,
  DEFAULT_TYPEORM_TYPE,
  DEFAULT_TYPEORM_USERNAME
} from '@common/common/constant'

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: DEFAULT_TYPEORM_TYPE,
      host: this.configService.get('MARIADB_HOST') || DEFAULT_TYPEORM_HOST,
      port: this.configService.get('MARIADB_PORT') || DEFAULT_TYPEORM_PORT,
      username: this.configService.get('MARIADB_USERNAME') || DEFAULT_TYPEORM_USERNAME,
      password: this.configService.get('MARIADB_PASSWORD') || DEFAULT_TYPEORM_PASSWORD,
      database: this.configService.get('MARIADB_DATABASE') || DEFAULT_TYPEORM_DATABASE,
      synchronize: DEFAULT_TYPEORM_SYNCHRONIZE,
      autoLoadEntities: DEFAULT_TYPEORM_AUTOLOAD_ENTITIES
    }
  }
}
