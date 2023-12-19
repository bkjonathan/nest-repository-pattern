## Installation

```bash
$ cp .env.example .env
# create .env file and copy contents from .env.example 
```
```bash
$ yarn install
# install Dependencies
```

## Running the app

```bash
# run docker for mongodb and mariadb.
$ yarn run docker

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Description

[Nest](https://github.com/nestjs/nest) Respository Pattern with TypeORM and Mongoose

You can provide the database configuration data in the .env file. If you prefer to use MongoDB, simply inject the MongooseDbModule into the DatabaseModule. Alternatively, if you want to use MySQL or MariaDB, inject the MariadbModule into the DatabaseModule.

````bash
@Module({
imports: [MariadbModule, MongooseDbModule]
})
````

#### `To create a new TypeORM Entity (Bank Entity), follow these steps:`

1. Create the Bank Entity and update the mariadb-entities.module/TypeormEntities array.

2. After updating, create the BankTypeormRepository class and extend it from TypeormRepository.

3. Now, you can inject it into services.

````bash
#in bank.entity
export class Bank {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number
}

#in mariadb-entities-module

export const TypeormEntities = [Trader,Bank]

#in BankTypeorm

export class BankTypeormRepository extends TypeormRepository<Bank>
} {
  constructor(@InjectRepository(Bank) private readonly repository: Repository<Bank>) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
````

#### ` To create a new Mongoose Model (Bank Collection), follow these steps:`

1. Create the Bank Schema and update the mongoose-model.module/allModels array.

2. After updating, create the BankMongooseRepository class and extend it from MongooseRepository.

3. Now, you can inject it into services.


## Inject into Services
```bash
import { TraderMongooseRepository } from '@app/trader/trader-mongoose.repository'

 constructor(private readonly traderRepository: TraderMongooseRepository) {}
 
 #or
 
 import { TraderTypeormRepository } from '@app/trader/trader-typeorm.repository'
 
 constructor(private readonly traderRepository: TraderTypeormRepository) {}
 
```
## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```



## License

Nest is [MIT licensed](LICENSE).
