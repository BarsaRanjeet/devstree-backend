import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestimonialDocument, Testimonial } from './schema';
import * as mongoose from 'mongoose';

@Injectable()
export class TestimonialService {

        constructor(@InjectModel(Testimonial.name) private testimonialModel: Model<TestimonialDocument>){}

        async add(data:any) :Promise<any>{
            const newDoc = {_id:new mongoose.Types.ObjectId(),...data,created_on:new Date()}
            await this.testimonialModel.create(newDoc);
            return newDoc;
        }
        
        async fetchAll() :Promise<any>{
            const doc = this.testimonialModel.find({active:1}).exec();
            return doc;
        }
        
        async update(data: any) :Promise<any>{
        
            const id:string = data.id;
            delete data.id;
            const newDoc = {_id:new mongoose.mongo.ObjectId(id),...data,updated_on:new Date()};
            await this.testimonialModel.updateOne({_id:new mongoose.mongo.ObjectId(id)},{"$set":newDoc});
            return newDoc;
    
        }
    
        async delete(id:string) :Promise<any>{
            await this.testimonialModel.updateOne({_id:new mongoose.mongo.ObjectId(id)},{"$set":{active:0}});
            return true;
        }
}
