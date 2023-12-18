import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateAdminDto } from './dto/create-admin.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Admin } from '@app/admin/entities/admin.schema'
import { Model } from 'mongoose'

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private readonly adminModel: Model<Admin>) {}
  async create(createAdminDto: CreateAdminDto) {
    try {
      return await this.adminModel.create(createAdminDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  async findAll() {
    return this.adminModel.find()
  }

  async findOne(_id: string) {
    return this.adminModel.findOne({ _id })
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    try {
      await this.adminModel.findOneAndUpdate({ id }, updateAdminDto, { new: true })
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  remove(_id: string) {
    return this.adminModel.deleteOne({ _id })
  }
}
