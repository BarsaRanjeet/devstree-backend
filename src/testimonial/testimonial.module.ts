import { Module } from '@nestjs/common';
import { TestimonialController } from './testimonial.controller';
import { TestimonialService } from './testimonial.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Testimonial, TestimonialSchema } from './schema';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forFeature([{ name: Testimonial.name, schema: TestimonialSchema }]),
    JoiPipeModule
  ],
  controllers: [TestimonialController],
  providers: [TestimonialService],
  exports:[TestimonialService]
})
export class TestimonialModule {}
