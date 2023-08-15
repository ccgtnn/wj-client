import * as yup from 'yup'

export const issueValidator = yup.object().shape({
  id: yup.string().required('ID is required'),
  name: yup.string().required('Name is required'),
  text: yup.string().default(''),
  year: yup.string().default(''),
  ord: yup.number().default(0),
})

export const arrayIssueValidator = yup.array().of(issueValidator)
