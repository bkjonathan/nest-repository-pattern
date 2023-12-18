import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    if (this.configService.get('DATABASE_USERNAME') && this.configService.get('DATABASE_PASSWORD')) {
      return {
        uri: `mongodb://${this.configService.get('DATABASE_USERNAME')}:${this.configService.get(
          'DATABASE_PASSWORD'
        )}@${this.configService.get('DATABASE_HOST')}:${this.configService.get(
          'DATABASE_PORT'
        )}/${this.configService.get('DATABASE_DB')}`,
        authSource: 'admin'
      }
    } else {
      return {
        uri: `mongodb://${this.configService.get('DATABASE_HOST')}:${this.configService.get(
          'DATABASE_PORT'
        )}/${this.configService.get('DATABASE_DB')}`,
        authSource: 'admin'
      }
    }
  }
}
