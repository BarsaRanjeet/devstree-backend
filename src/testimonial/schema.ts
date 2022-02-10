
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TestimonialDocument = Testimonial & Document;

@Schema({collection:'testimonial'})
export class Testimonial {
  @Prop({type:mongoose.Types.ObjectId})
  _id: any;

  @Prop({type:String})
  photo: string;

  @Prop({Type:String})
  name: string;

  @Prop({type:String})
  post: string;

  @Prop({type:String})
  description: string;

  @Prop({type:Date})
  created_on: any;

  @Prop({type:Date})
  updated_on:any;

  @Prop({type:Number})
  active: number;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
