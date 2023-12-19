import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TraderModule } from './trader/trader.module'
import { DatabaseModule } from './database/database.module'
import { AdminModule } from './admin/admin.module'
import { APP_PIPE } from '@nestjs/core'

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
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true
      })
    }
  ]
})
export class AppModule {}
