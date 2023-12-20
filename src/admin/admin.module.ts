import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'
import { AdminController } from './admin.controller'
import { AdminTypeormRepository } from '@app/admin/repository/admin-typeorm.repository'
import { AdminMongooseRepository } from '@app/admin/repository/admin-mongoose.repository'

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminTypeormRepository, AdminMongooseRepository]
})
export class AdminModule {}
