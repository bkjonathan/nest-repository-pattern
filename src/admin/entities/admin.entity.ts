import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @Column({ nullable: true })
  telegramId: string

  @Column({ nullable: true })
  usernameAppChat: string

  @Column({ nullable: true })
  usernameAppVt: string

  @Column()
  isLocked: boolean

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date
}
