import React, { useState } from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'

// utils
import useAuth from '@/hooks/useAuth'
import { translate } from '@/i18n/translate'

// styles
import styles from './formulario.module.scss'
import useCheckout from '@/hooks/useCheckout'

// const initialState = {
//   name: '',
//   lastname: '',
//   email: '',
//   phone: '',
//   country: '',
//   city: ''
// }

const DatosPersonales = ({ nextStep, locale }) => {
  const router = useRouter()
  const { isAuth } = useAuth()
  const { personalData, loadPersonalData } = useCheckout()

  const {
    checkout: { form }
  } = translate[locale]

  return (
    <Formik
      enableReinitialize
      initialValues={personalData}
      onSubmit={(values) => {
        loadPersonalData(values)
        router.push({
          query: {
            ...router.query,
            user: values.name
          }
        })
        nextStep()
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

            <button className="btn btn-danger btn-lg">
              {form.personalForm.submit}
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default DatosPersonales
