import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'

import useAuth from '@/hooks/useAuth'
import { PAISES } from '@/data/paises'
import useToast from '@/hooks/useToast'
import { useMutation } from '@apollo/client'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import Loader from '@/components/Loader/Loader'
import useYupSchema from '@/hooks/useYupSchema'
import ErrorMessage from '@/components/ErrorMessage'
import { countries } from '@/data/countries'
import { CREAR_USUARIO_MUTATION } from '../../../graphql/mutation/crearUsuario_mutation'

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
    initialValues,
    enableReinitialize: true,
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
            <label htmlFor="nameFloat">{registro.placeholder.name}</label>
            <input
              type="text"
              name="nombre"
              id="nameFloat"
              autoComplete="off"
              placeholder="Nombre"
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
              onChange={formik.handleChange}
              className={`form-control ${styles.registro_input}`}
            />
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'nombre'
              }}
            />
          </div>
          <div className="mb-1 col-12 col-md-6">
            <label htmlFor="lastNameFloat">
              {registro.placeholder.lastname}
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
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'apellidos'
              }}
            />
          </div>
        </div>
        <div className="mb-1">
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
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'email'
            }}
          />
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-1">
            <label htmlFor="celular">{registro.placeholder.phone}</label>
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
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'celular'
              }}
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
              {Object.keys(countries)
                .sort()
                .map((key) => (
                  <option key={key} value={key}>
                    {countries[key].name[locale]}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-12 col-md-4 mb-1">
            <label htmlFor="">{form.personalForm.city}</label>
            <input
              type="text"
              name="ciudad"
              autoComplete="off"
              placeholder="Ciudad"
              onBlur={formik.handleBlur}
              value={formik.values.ciudad}
              onChange={formik.handleChange}
              className={`form-control ${styles.registro_input}`}
            />
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'ciudad'
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-1">
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
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'password'
              }}
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
              <input
                type="checkbox"
                id="termsCheck"
                name="terminos"
                onBlur={formik.handleBlur}
                className="form-check-input me-4"
                onChange={formik.handleChange}
                checked={formik.values.terminos}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                {registro.terms()}
              </label>
            </div>
            <ErrorMessage
              {...{
                errors: formik?.errors,
                touched: formik?.touched,
                name: 'terminos'
              }}
            />
          </div>

          <div className="form-check mb-2">
            <input
              id="infoCheck"
              type="checkbox"
              className="form-check-input me-4"
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
          <button
            disabled={loading}
            className="btn btn-danger d-flex align-items-center text-white"
          >
            {registro.submitBtn} {loading ? <Loader size="xs" /> : null}
          </button>
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
