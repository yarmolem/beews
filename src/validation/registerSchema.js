import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  nombre: yup.string().required('Este campo es obligatorio'),
  apellidos: yup.string().required('Este campo es obligatorio'),
  email: yup
    .string()
    .email('Ingrese un email válido')
    .required('Este campo es obligatorio'),
  celular: yup.string().required('Este campo es obligatorio'),
  password: yup.string().required('Este campo es obligatorio'),
  terminos: yup.boolean('Para continuar debe aceptar los terminos y condiciones').required('')
})
