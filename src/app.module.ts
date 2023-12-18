import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TraderModule } from './trader/trader.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    DatabaseModule,
    TraderModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
