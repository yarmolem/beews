import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

const useYupSchema = () => {
  const registerSchema = (values) => {
    const errors = {}
    if (isEmpty(values.nombre)) {
      errors.nombre = 'Ingrese un nombre válido'
    }
    if (isEmpty(values.apellidos)) {
      errors.apellidos = 'Ingrese al menos un apellido válido'
    }
    if (!isEmail(values.email)) {
      errors.email = 'Email inválido'
    }
    if (isEmpty(values.celular)) {
      errors.celular = 'Ingrese celular válido'
    }
    if (isEmpty(values.ciudad)) {
      errors.ciudad = 'Ingrese una ciudad válida'
    }
    if (isEmpty(values.password)) {
      errors.password = 'Ingrese una contraseña segura'
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas deben coincidir'
    }

    if (values.terminos === false) {
      errors.terminos = 'Debe seleccionar esta opcion'
    }

    return errors
  }

  return { registerSchema }
}

export default useYupSchema
