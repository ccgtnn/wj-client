import * as yup from 'yup'

export const contentValidator = yup.object().shape({
  name: yup.string().required('Name is required'),
  data: yup.string().default(''),
})

export const arrayContentValidator = yup.array().of(contentValidator)
