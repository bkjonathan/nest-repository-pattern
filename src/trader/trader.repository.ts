import { TypeormRepository } from '@common/common/repository/typeorm-repository'
import { Trader } from '@app/trader/entities/trader.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

export class TraderRepository extends TypeormRepository<Trader> {
  constructor(@InjectRepository(Trader) private readonly repository: Repository<Trader>) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
