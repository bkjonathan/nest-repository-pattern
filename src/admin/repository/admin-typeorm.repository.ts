import { TypeormRepository } from '@common/common/repository/typeorm-repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Admin } from '@app/admin/entities/admin.entity'

export class AdminTypeormRepository extends TypeormRepository<Admin> {
  constructor(@InjectRepository(Admin) private readonly repository: Repository<Admin>) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
