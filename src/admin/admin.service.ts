import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateAdminDto } from './dto/create-admin.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'
import { AdminMongooseRepository } from '@app/admin/repository/admin-mongoose.repository'

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminMongooseRepository) {}
  async create(createAdminDto: CreateAdminDto) {
    try {
      return await this.adminRepository.store(createAdminDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  async findAll() {
    return this.adminRepository.findAll()
  }

  async findOne(_id: string) {
    return this.adminRepository.findById(_id)
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    try {
      await this.adminRepository.updateOne(id, updateAdminDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  remove(_id: string) {
    return this.adminRepository.destroy(_id)
  }
}
