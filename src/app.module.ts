import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TraderModule } from './trader/trader.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'RootPwd',
      database: 'nest_test',
      entities: [],
      synchronize: true
    }),
    TraderModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
