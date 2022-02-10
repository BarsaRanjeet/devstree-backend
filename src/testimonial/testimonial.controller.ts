import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Add, Update,DeleteDoc } from './dto';
import { TestimonialService } from './testimonial.service';

@Controller('testimonial')
export class TestimonialController {

    constructor(private testimonialService:TestimonialService){}
    
    // add
    @Post()
    async add(@Body() body:Add) :Promise<any>{
        const result = await this.testimonialService.add(body);
        return result;
    }
    
    // fetch all
    @Get()
    async fetchAll() :Promise<any>{

        const result = await this.testimonialService.fetchAll();
        return result;

    }
    
    // edit
    @Put()
    async update(@Body() body:Update) :Promise<any>{
        const result = await this.testimonialService.update(body);
        return result;
    }

    // delete
    @Delete()
    async delete(@Body() body:DeleteDoc) :Promise<any>{
        const result = await this.testimonialService.delete(body.id);
        return result;
    }


}
