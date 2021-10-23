import * as yup from 'yup'

export const formDestinatarioSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  lastname: yup.string().required('Este campo es obligatorio'),
  country: yup.string().required('Este campo es obligatorio'),
  city: yup.string().required('Este campo es obligatorio'),
  district: yup.string().required('Este campo es obligatorio'),
  address: yup.string().required('Este campo es obligatorio'),
  reference: yup.string().required('Este campo es obligatorio')
})
