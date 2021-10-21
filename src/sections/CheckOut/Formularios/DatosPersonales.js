import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'

// utils
import useAuth from '@/hooks/useAuth'
import { translate } from '@/i18n/translate'

// styles
import styles from './formulario.module.scss'
import useCheckout from '@/hooks/useCheckout'
import { useMutation } from '@apollo/client'
import { UPDATE_USUARIO_MUTATION } from 'src/graphql/mutation/updateUsuario_mutation'
import Loader from '@/components/Loader/Loader'
import useToast from '@/hooks/useToast'

const DatosPersonales = ({ nextStep, locale, onSuccess }) => {
  const router = useRouter()
  const { isAuth } = useAuth()
  const { loadPersonalData } = useCheckout()
  const { toast } = useToast()
  const authStateData = useAuth()

  console.log('authStateData ', authStateData)
  const [updateUsuarioMutation, { loading }] = useMutation(
    UPDATE_USUARIO_MUTATION,
    {
      onError: (err) => {
        const error = err?.graphQLErrors[0].debugMessage
        if (error) {
          console.log(error)
        } else {
          console.log('Error desconocido ', err)
        }
      }
    }
  )

  const {
    checkout: { form }
  } = translate[locale]

  const isEdit = (values) => {
    if (
      authStateData.user.celular !== values.celular ||
      authStateData.user.pais !== values.pais ||
      authStateData.user.ciudad !== values.ciudad
    ) {
      return true
    }
    return false
  }

  let initialValues = {
    nombre: authStateData.user.nombre,
    apellidos: authStateData.user.apellidos,
    email: authStateData.user.email,
    celular: authStateData.user.celular,
    pais: authStateData.user.pais,
    ciudad: authStateData.user.ciudad
  }

  useEffect(() => {
    initialValues = {
      nombre: authStateData.user.nombre,
      apellidos: authStateData.user.apellidos,
      email: authStateData.user.email,
      celular: authStateData.user.celular,
      pais: authStateData.user.pais,
      ciudad: authStateData.user.ciudad
    }
  }, [])

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values) => {
        if (isEdit(values)) {
          const response = await updateUsuarioMutation({
            variables: {
              input: {
                nombre: values.nombre,
                apellidos: values.apellidos,
                celular: values.celular,
                pais: values.pais,
                ciudad: values.ciudad
              }
            }
          })
          const token = response?.data?.UpdateUsuario.apiToken
          if (token) {
            toast({
              title: 'Exitoso',
              msg: 'Datos actualizados exitosamente',
              hideProgressBar: true
            })
            // router.push({
            //   query: {
            //     ...router.query,
            //     user: values.name
            //   }
            // })
            onSuccess()
            loadPersonalData(values)
          } else {
            alert('error al actualizar')
          }
          console.log('update user ', response)
        } else {
          // router.push({
          //   query: {
          //     ...router.query,
          //     user: values.name
          //   }
          // })
          onSuccess()
          loadPersonalData(values)
        }
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className={styles.formulario_form}>
            <div className="row">
              <div className="mb-1 col-12 col-md-6">
                <label htmlFor="">{form.personalForm.name}</label>
                <input
                  type="text"
                  name="nombre"
                  disabled={isAuth}
                  value={values.nombre}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="mb-1 col-12 col-md-6">
                <label htmlFor="">{form.personalForm.lastname}</label>
                <input
                  type="text"
                  name="apellidos"
                  disabled={isAuth}
                  value={values.apellidos}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-1">
              <label htmlFor="">{form.personalForm.email}</label>
              <input
                type="text"
                name="email"
                disabled={isAuth}
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                aria-label="Username"
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-1">
                <label htmlFor="">{form.personalForm.phone}</label>
                <input
                  type="text"
                  name="celular"
                  value={values.celular}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-4 mb-1">
                <label htmlFor="">{form.personalForm.country}</label>
                <select
                  name="pais"
                  value={values.pais}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-label="Username"
                  className="form-control"
                >
                  <option value="">option 1</option>
                </select>
              </div>
              <div className="col-12 col-md-4 mb-1">
                <label htmlFor="">{form.personalForm.city}</label>
                <select
                  name="ciudad"
                  value={values.ciudad}
                  onBlur={handleBlur}
                  aria-label="Username"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">option 1</option>
                </select>
              </div>
            </div>
            {loading ? <Loader /> : null}
            {!loading && (
              <button className="btn btn-danger btn-lg">
                {form.personalForm.submit}
              </button>
            )}
          </form>
        )
      }}
    </Formik>
  )
}

export default DatosPersonales
