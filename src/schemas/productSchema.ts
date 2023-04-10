import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
    stock: Joi.number().required(),
    imageUrl: Joi.string()
})