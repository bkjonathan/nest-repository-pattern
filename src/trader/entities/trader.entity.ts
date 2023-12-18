import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('user', ['username'], { unique: true })
@Index('created_at', ['createdAt'], {})
@Index('phone', ['phone1'], {})
@Entity({ name: 'customers' })
export class Trader {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @Column({ name: 'user', unique: true, length: 191 })
  username: string

  @Column('varchar', { name: 'pass' })
  password: string

  @Column('varchar', { name: 'fullname', length: 70 })
  fullname: string

  @Column('datetime')
  dod: Date

  @Column('tinytext', { name: 'email' })
  email: string

  @Column('varchar', { name: 'phone', length: 50 })
  phone1: string

  @Column('varchar', { nullable: true, length: 50 })
  phone2: string | null

  @Column('int', { name: 'credit' })
  creditPrice: number

  @Column({ name: 'is_locked', default: false })
  isLocked: boolean

  @Column('varchar', { name: 'lock_reason', length: 1024 })
  lockReason: string

  @Column({ name: 'is_scammer', default: false })
  isScammer: boolean

  @Column('tinytext', { name: 'scammer_note', nullable: true })
  scammerNote: string | null

  @Column({ name: 'is_suspect_withDrawer', default: false })
  isSuspectWithDrawer: boolean

  @Column('tinytext', { nullable: true })
  note: string | null

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date
}
