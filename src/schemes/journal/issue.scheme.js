import Joi from 'joi'

export const issueSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
  name: Joi.string().required(),
  text: Joi.string().allow(''),
  year: Joi.string().allow(''),
  ord: Joi.number().default(0),
})

export const arrayIssueSchema = Joi.array().items(issueSchema)
