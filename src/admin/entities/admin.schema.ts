import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { genSaltSync, hashSync } from 'bcrypt'

@Schema({
  timestamps: true
})
export class Admin {
  @Prop({ required: true })
  username: string

  @Prop({ Type: String, required: true, select: false })
  password: string

  @Prop({ lowercase: true })
  email: string

  @Prop()
  telegramId: string

  @Prop()
  usernameAppChat: string

  @Prop()
  usernameAppVt: string

  @Prop({ type: Boolean, default: false })
  isLocked: boolean
}

export type AdminDocument = HydratedDocument<Admin>

export const AdminSchema = SchemaFactory.createForClass(Admin)

AdminSchema.pre('save', function (next) {
  if (this.password) {
    this.password = hashSync(this.password, genSaltSync(10))
  }
  next()
})

AdminSchema.pre('findOneAndUpdate', function (next) {
  const update = <Record<string, any>>{ ...this.getUpdate() }
  if (update.password) {
    update.password = hashSync(update.password, genSaltSync(10))
    this.setUpdate(update)
  }
  next()
})
