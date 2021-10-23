import * as yup from 'yup'

export const crearFormularioSchema = yup.object().shape({
  nombres: yup.string().required('Este campo es obligatorio'),
  email: yup
    .string()
    .email('Ingrese un email válido')
    .required('Este campo es obligatorio'),
  descripcion: yup.string().required('Este campo es obligatorio')
})
