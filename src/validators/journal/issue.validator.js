import * as yup from 'yup'

export const issueValidator = yup.object().shape({
  id: yup.number().integer().required(),
  name: yup.string().required(),
  year: yup.number().integer().default(0),
  number: yup.number().integer().default(0),
  ord: yup.number().integer().default(0),
  dateCreate: yup.number().integer().default(0),
})

export const arrayIssueValidator = yup.array().of(issueValidator)
