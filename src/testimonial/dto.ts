import * as Joi from "joi";
import { JoiSchema } from "nestjs-joi";

export class Add{
    @JoiSchema(Joi.string().required())
    photo: string;
  
    @JoiSchema(Joi.string().required())
    name: string;
  
    @JoiSchema(Joi.string().required())
    post: string;
  
    @JoiSchema(Joi.string().required())
    description: string;

    @JoiSchema(Joi.number().required())
    active: number;
}

export class Update{

    @JoiSchema(Joi.string().required())
    id:string;

    @JoiSchema(Joi.string().required())
    photo: string;
  
    @JoiSchema(Joi.string().required())
    name: string;
  
    @JoiSchema(Joi.string().required())
    post: string;
  
    @JoiSchema(Joi.string().required())
    description: string;

    @JoiSchema(Joi.number().required())
    active: number;
}

export class DeleteDoc{

    @JoiSchema(Joi.string().required())
    id:string;

}