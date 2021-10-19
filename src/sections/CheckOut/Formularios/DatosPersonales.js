import React, { useState } from 'react'
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

const DatosPersonales = ({ nextStep, locale }) => {
  const router = useRouter()
  const {
    isAuth,
    user: { userId }
  } = useAuth()
  const { personalData, loadPersonalData } = useCheckout()
  const { toast } = useToast()

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

  console.log('personalData ', personalData)
  console.log('usAuth id ', userId)

  const {
    checkout: { form }
  } = translate[locale]

  const isEdit = (values) => {
    if (
      personalData.phone !== values.phone ||
      personalData.country !== values.country ||
      personalData.city !== values.city
    ) {
      return true
    }
    return false
  }

  return (
    <Formik
      enableReinitialize
      initialValues={personalData}
      onSubmit={async (values) => {
        if (isEdit(values)) {
          const response = await updateUsuarioMutation({
            variables: {
              input: {
                nombre: values.name,
                apellidos: values.lastname,
                celular: values.phone,
                pais: values.country,
                ciudad: values.city,
                userId: userId
              }
            }
          })
          const token = response?.data?.UpdateUsuario.apiToken
          if (token) {
            toast({
              title: 'Usuario creado con éxito',
              msg: 'Registro exitoso',
              hideProgressBar: true
            })
            router.push({
              query: {
                ...router.query,
                user: values.name
              }
            })
            nextStep()
            loadPersonalData(values)
          } else {
            alert('error al actualizar')
          }
          console.log('update user ', response)
        } else {
          router.push({
            query: {
              ...router.query,
              user: values.name
            }
          })
          nextStep()
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
                  name="name"
                  disabled={isAuth}
                  value={values.name}
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
                  name="lastname"
                  disabled={isAuth}
                  value={values.lastname}
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
                  name="phone"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-4 mb-1">
                <label htmlFor="">{form.personalForm.country}</label>
                <select
                  name="country"
                  value={values.country}
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
                  name="city"
                  value={values.city}
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
