import Joi from 'joi'

export const contentSchema = Joi.object({
  //id: Joi.string().guid({ version: 'uuidv4' }).required(),
  name: Joi.string().required(),
  data: Joi.string().allow(''),
})

export const arrayContentSchema = Joi.array().items(contentSchema)
