import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Debe ingresar un corro válido'),
  password: yup.string().required('Este campo es obligatorio')
})
