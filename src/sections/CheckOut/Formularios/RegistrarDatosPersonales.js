import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import { PAISES } from '@/data/paises'
import useAuth from '@/hooks/useAuth'
import useCheckout from '@/hooks/useCheckout'
import useToast from '@/hooks/useToast'
import useYupSchema from '@/hooks/useYupSchema'
import { translate } from '@/i18n/translate'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
// import { useToast } from '@/hooks/useToast'
import { CREAR_USUARIO_MUTATION } from 'src/graphql/mutation/crearUsuario_mutation'
import styles from './formulario.module.scss'

const RegistrarDatosPersonales = ({
  onSuccess = () => {},
  goLogin = () => {}
}) => {
  const { locale } = useRouter()
  const { registerSchema } = useYupSchema()
  const { registro } = translate[locale]
  const [mensajeError, setMensajeError] = useState(null)
  const { toast } = useToast()
  const { login: loginAction } = useAuth()
  const { loadPersonalData } = useCheckout()
  const {
    checkout: { form }
  } = translate[locale]
  const [crearUsuarioMutation, { loading }] = useMutation(
    CREAR_USUARIO_MUTATION,
    {
      onError: (err) => {
        const error = err?.graphQLErrors[0].debugMessage
        if (error === 'YA_EXISTE') {
          console.log(error)
          setMensajeError('Usuario ya existente, inicie sesión')
        } else {
          console.log('Error desconocido ', err)
        }
      }
    }
  )

  const initialValues = {
    tipoUsuario: 2,
    nombre: '',
    apellidos: '',
    email: '',
    celular: '',
    password: '',
    confirmPassword: '',
    pais: 'default',
    ciudad: '',
    terminos: false
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validate: registerSchema,
    onSubmit: async (values) => {
      setMensajeError(null)
      const response = await crearUsuarioMutation({
        variables: {
          input: {
            tipoUsuario: 2,
            nombre: values.nombre,
            apellidos: values.apellidos,
            email: values.email,
            celular: values.celular,
            password: values.password,
            pais: values.pais,
            ciudad: values.ciudad
          }
        }
      })
      const token = response?.data?.CrearUsuario.apiToken
      if (token) {
        toast({
          title: 'Usuario creado con éxito',
          msg: 'Registro exitoso',
          hideProgressBar: true
        })
        console.log(' response register ', response.data.CrearUsuario)
        loadPersonalData({
          name: response.data.CrearUsuario.nombre,
          lastname: response.data.CrearUsuario.apellidos,
          email: response.data.CrearUsuario.email,
          phone: response.data.CrearUsuario.celular,
          country: response.data.CrearUsuario.pais,
          city: response.data.CrearUsuario.ciudad
        })
        loginAction(response.data.CrearUsuario)
        onSuccess()
      }
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.formulario_form}>
        <div className="row mb-3">
          <div className="mb-1 col-12 col-md-6">
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'nombre'
              }}
            />
            <label htmlFor="nameFloat">{registro.placeholder.name}</label>
            <input
              type="text"
              id="nameFloat"
              name="nombre"
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Nombre"
              className={`form-control ${styles.registro_input}`}
            />
          </div>
          <div className="mb-1 col-12 col-md-6">
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'apellidos'
              }}
            />
            <label htmlFor="lastNameFloat">
              {registro.placeholder.lastName}
            </label>
            <input
              type="text"
              id="lastNameFloat"
              name="apellidos"
              onBlur={formik.handleBlur}
              value={formik.values.apellidos}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Apellidos"
              className={`form-control ${styles.registro_input}`}
            />
          </div>
        </div>
        <div className="mb-1">
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'email'
            }}
          />
          <label htmlFor="emailFloat">{registro.placeholder.email}</label>
          <input
            type="text"
            id="emailFloat"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            autoComplete="off"
            placeholder="Correo electrónico"
            className={`form-control ${styles.registro_input}`}
          />
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-1">
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'celular'
              }}
            />
            <label htmlFor="celular">{registro.placeholder.phoneNumber}</label>
            <input
              type="text"
              id="celular"
              name="celular"
              onBlur={formik.handleBlur}
              value={formik.values.celular}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Nombre"
              className={`form-control ${styles.registro_input}`}
            />
          </div>
          <div className="col-12 col-md-4 mb-1">
            <label htmlFor="">{form.personalForm.country}</label>
            <select
              name="pais"
              value={formik.values.pais}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              aria-label="Username"
              className="form-control"
            >
              <option value="default" disabled>
                Selecciona un país
              </option>
              {PAISES.map((pais) => (
                <option key={pais.id} value={pais.id}>
                  {pais.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-4 mb-1">
            <label htmlFor="">{form.personalForm.city}</label>
            <select
              name="ciudad"
              onBlur={formik.handleBlur}
              value={formik.values.ciudad}
              onChange={formik.handleChange}
              aria-label="Username"
              className="form-control"
            >
              <option value="">option 1</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-1">
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'password'
              }}
            />
            <label htmlFor="passFloat">{registro.placeholder.password}</label>
            <input
              id="passFloat"
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Contraseña"
              className={`form-control ${styles.registro_input}`}
            />
          </div>
          <div className="col-12 col-md-6 mb-1">
            <label htmlFor="confirmPassFloat">
              {registro.placeholder.confirmPassword}
            </label>
            <input
              type="password"
              autoComplete="off"
              id="confirmPassFloat"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirmar contraseña"
              className={`form-control ${styles.registro_input}`}
            />
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'confirmPassword'
              }}
            />
          </div>
        </div>

        <div>
          <div className="form-check mb-2">
            <div>
              <ErrorMessage
                {...{
                  errors: formik?.errors,
                  touched: formik?.touched,
                  name: 'terminos'
                }}
              />
            </div>
            <div>
              <input
                type="checkbox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terminos}
                id="termsCheck"
                name="terminos"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="termsCheck">
                {registro.terms()}
              </label>
            </div>
          </div>

          <div className="form-check mb-2">
            <input
              id="infoCheck"
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="infoCheck">
              {registro.newsletter}
            </label>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          {mensajeError && (
            <p className="alert alert-primary">{mensajeError}</p>
          )}
          {loading && <Loader />}
          {!loading && (
            <button
              className={`btn btn-danger btn-lg text-white ${styles.registro_btn}`}
            >
              {registro.submitBtn}
            </button>
          )}
        </div>
      </form>
      <div className="d-flex justify-content-center mt-4">
        <button
          onClick={goLogin}
          className={`btn btn-lg text-white ${styles.goregistro_btn}`}
        >
          {registro.loginBtn}
        </button>
      </div>
    </>
  )
}

export default RegistrarDatosPersonales
