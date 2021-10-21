import React, { useState } from 'react'
import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './registro.module.scss'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { CREAR_USUARIO_MUTATION } from 'src/graphql/mutation/crearUsuario_mutation'
import ErrorMessage from '@/components/ErrorMessage'
import useYupSchema from '@/hooks/useYupSchema'
import Loader from '@/components/Loader/Loader'
import useToast from '@/hooks/useToast'
import { PAISES } from '@/data/paises'

const RegistroForm = ({ onToggleAuth = () => {} }) => {
  const { locale } = useRouter()
  const { registerSchema } = useYupSchema()
  const { registro } = translate[locale]
  const [mensajeError, setMensajeError] = useState(null)
  const { toast } = useToast()
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
    pais: 'default',
    ciudad: '',
    password: '',
    confirmPassword: '',
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
        onToggleAuth()
      }
    }
  })

  return (
    <>
      <h1>{registro.title}</h1>
      <p>{registro.subtitle}</p>
      <form onSubmit={formik.handleSubmit}>
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'nombre'
          }}
        />
        <div className="form-floating">
          <input
            required
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
          <label htmlFor="nameFloat">{registro.placeholder.name}</label>
        </div>
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'apellidos'
          }}
        />
        <div className="form-floating">
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
          <label htmlFor="lastNameFloat">{registro.placeholder.lastName}</label>
        </div>
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'email'
          }}
        />
        <div className="form-floating">
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
          <label htmlFor="emailFloat">{registro.placeholder.email}</label>
        </div>
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'celular'
          }}
        />
        <div className="form-floating">
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
          <label htmlFor="celular">{registro.placeholder.phoneNumber}</label>
        </div>
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'password'
          }}
        />
        <div className="form-floating">
          <select
            name="pais"
            value={formik.values.pais}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            aria-label="Username"
            className={`form-control ${styles.registro_input}`}
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
          <label htmlFor="">{registro.placeholder.country}</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="emailFloat"
            name="ciudad"
            onBlur={formik.handleBlur}
            value={formik.values.ciudad}
            onChange={formik.handleChange}
            autoComplete="off"
            placeholder="Correo electrónico"
            className={`form-control ${styles.registro_input}`}
          />
          <label htmlFor="emailFloat">{registro.placeholder.city}</label>
        </div>
        <div className="form-floating">
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
          <label htmlFor="passFloat">{registro.placeholder.password}</label>
        </div>

        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'confirmPassword'
          }}
        />
        <div className="form-floating">
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
          <label htmlFor="confirmPassFloat">
            {registro.placeholder.confirmPassword}
          </label>
        </div>

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
          <input id="infoCheck" type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="infoCheck">
            {registro.newsletter}
          </label>
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
          onClick={onToggleAuth}
          className={`btn btn-lg text-white ${styles.goregistro_btn}`}
        >
          {registro.loginBtn}
        </button>
      </div>
    </>
  )
}

export default RegistroForm
