import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema({
  timestamps: true,
  collection: 'customers'
})
export class Trader {
  @Prop({ required: true, alias: 'username' })
  user: string

  @Prop({ Type: String, required: true, select: false })
  password: string

  @Prop({ required: true })
  fullname: string

  @Prop({ type: Date })
  dob: Date

  @Prop({ type: String })
  email: string

  @Prop({ type: String, required: true, alias: 'phone1' })
  phone: string

  @Prop({ type: String })
  phone2: string

  @Prop({ type: Number, required: true })
  creditPrice: number

  @Prop({ type: Boolean })
  isLocked: boolean

  @Prop({ type: String })
  lockReason: string

  @Prop({ type: Boolean })
  isScammer: boolean

  @Prop({ type: String })
  scammerNote: string

  @Prop({ type: Boolean })
  isSuspectWithDrawer: boolean

  @Prop({ type: String })
  note: string
}

export type TraderDocument = HydratedDocument<Trader>

export const TraderSchema = SchemaFactory.createForClass(Trader)
