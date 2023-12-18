import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'customers' })
export class Trader {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  fullname: string
}
