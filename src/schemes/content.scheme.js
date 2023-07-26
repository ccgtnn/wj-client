import Joi from 'joi'

export const contentSchema = Joi.object({
  name: Joi.string().required(),
  data: Joi.string().allow(''),
})

export const arrayContentSchema = Joi.array().items(contentSchema)
