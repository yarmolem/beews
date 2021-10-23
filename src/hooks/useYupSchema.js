// import { useRouter } from 'next/dist/client/router'
// import { translate } from '../i18n/translate'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'

const useYupSchema = () => {
  //   const { locale } = useRouter()
  //   console.log(locale)
  //   const {
  //     registro: { errors }
  //   } = translate['es-ES']

  const registerSchema = (values) => {
    console.log('values validation ', values)
    const errors = {}
    if (isEmpty(values.nombre, { ignore_whitespace: false })) {
      errors.nombre = 'Escriba un nombre válido'
      return errors
    }
    if (isEmpty(values.apellidos, { ignore_whitespace: false })) {
      errors.apellidos = 'Escriba al menos un apellido válido'
      return errors
    }
    if (!isEmail(values.email)) {
      errors.email = 'Email inválido'
      return errors
    }
    if (isEmpty(values.celular, { ignore_whitespace: false })) {
      errors.celular = 'Escriba celular válido'
      return errors
    }
    if (isEmpty(values.password)) {
      errors.password = 'Escriba una contraseña segura'
      return errors
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas deben coincidir'
      return errors
    }

    if (values.terminos === false) {
      errors.terminos = 'Debe seleccionar esta opcion'
      console.log('ERRORS ', errors)
      return errors
    }
  }

  return { registerSchema }
}

export default useYupSchema

// nombre: '',
//     apellidos: '',
//     email: '',
//     celular: '',
//     password: '',
//     confirmPassword: '',
//     terminos: false
