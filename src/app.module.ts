import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TraderModule } from './trader/trader.module'
import { DatabaseModule } from './database/database.module'
import { AdminModule } from './admin/admin.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    DatabaseModule,
    TraderModule,
    AdminModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
