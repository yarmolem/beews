import ErrorMessage from '@/components/ErrorMessage'
import { PAISES } from '@/data/paises'
import useCheckout from '@/hooks/useCheckout'
import { translate } from '@/i18n/translate'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { formDestinatarioSchema } from 'src/validation/formDestinatarioSchema'

// styles
import styles from './formulario.module.scss'

const DatosDestinatario = ({ next, locale }) => {
  const {
    parents = [],
    checkout: { form }
  } = translate[locale]
  const [errors, setErrors] = useState({})
  const { loadDestinationData } = useCheckout()

  const horarios = [
    { id: 1, text: '8:00am - 9:00am' },
    { id: 2, text: '9:00am - 10:00am' },
    { id: 3, text: '10:00am - 11:00am' },
    { id: 4, text: '11:00am - 12:00am' },
    { id: 5, text: '12:00am - 01:00pm' },
    { id: 6, text: '01:00pm - 02:00pm' },
    { id: 7, text: '02:00pm - 03:00pm' },
    { id: 8, text: '03:00pm - 04:00pm' },
    { id: 9, text: '04:00pm - 05:00pm' },
    { id: 10, text: '05:00pm - 06:00pm' },
    { id: 11, text: '06:00pm - 07:00pm' },
    { id: 12, text: '07:00pm - 08:00pm' }
  ]

  const initialValues = {
    name: '',
    lastname: '',
    country: 'default',
    city: '',
    district: '',
    address: '',
    reference: '',
    relationship: 'default',
    deliveryDate: '',
    deliveryTime: 'default'
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: formDestinatarioSchema,
    onSubmit: async (values) => {
      console.log('submit')
      loadDestinationData(values)
      next()
    }
  })

  return (
    <form className={styles.formulario_form} onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-6 mb-1">
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'name'
            }}
          />
          <label htmlFor="">{form.destinationForm.name}</label>
          <input
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-label="Username"
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-6 mb-1">
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'lastname'
            }}
          />
          <label htmlFor="">{form.destinationForm.lastname}</label>
          <input
            type="text"
            name="lastname"
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            onChange={formik.handleChange}
            aria-label="Username"
            className="form-control"
          />
        </div>
      </div>
      <div className={styles.formulario_label}>
        <label>{form.destinationForm.label}</label>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.personalForm.country}</label>
          <select
            name="country"
            value={formik.values.country}
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
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'country'
            }}
          />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.destinationForm.city}</label>
          <input
            type="text"
            name="city"
            onBlur={formik.handleBlur}
            value={formik.values.city}
            onChange={formik.handleChange}
            aria-label="Username"
            className="form-control"
          />
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'city'
            }}
          />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.destinationForm.district}</label>
          <input
            type="text"
            name="district"
            onBlur={formik.handleBlur}
            value={formik.values.district}
            onChange={formik.handleChange}
            aria-label="Username"
            className="form-control"
          />
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'district'
            }}
          />
        </div>
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.address}</label>
        <input
          type="text"
          name="address"
          onBlur={formik.handleBlur}
          value={formik.values.address}
          onChange={formik.handleChange}
          aria-label="Username"
          className="form-control"
        />
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'address'
          }}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.reference}</label>
        <input
          type="text"
          name="reference"
          onBlur={formik.handleBlur}
          value={formik.values.reference}
          onChange={formik.handleChange}
          aria-label="Username"
          className="form-control"
        />
        <ErrorMessage
          {...{
            errors: formik?.errors,
            touched: formik?.touched,
            name: 'reference'
          }}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.link}</label>
        <select
          type="text"
          name="relationship"
          onBlur={formik.handleBlur}
          value={formik.values.relationship}
          onChange={formik.handleChange}
          aria-label="Username"
          className="form-control"
        >
          <option disabled={true} value="default">
            Selecciona una opcion
          </option>
          {parents.map((objParent, i) => (
            <option key={objParent.id} value={objParent.id}>
              {objParent.name}
            </option>
          ))}
        </select>
        {errors?.relationship && (
          <span className="text-xs w-full text-red-600 text-left alert alert-danger">
            {errors.relationship}
          </span>
        )}
      </div>
      <div className="row mb-1">
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.date}</label>
          <input
            type="date"
            name="deliveryDate"
            onBlur={formik.handleBlur}
            value={formik.values.deliveryDate}
            onChange={formik.handleChange}
            className="form-control"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.time}</label>
          <select
            type="text"
            name="deliveryTime"
            onBlur={formik.handleBlur}
            value={formik.values.deliveryTime}
            onChange={(e) => {
              formik.handleChange(e)
              setErrors({})
            }}
            aria-label="Username"
            className="form-control"
          >
            <option disabled={true} value="default">
              Selecciona una opcion
            </option>
            {horarios.map((horario) => (
              <option key={horario.id} value={horario.id}>
                {horario.text}
              </option>
            ))}
          </select>
          {errors?.deliveryTime && (
            <span className="text-xs w-full text-red-600 text-left alert alert-danger">
              {errors.deliveryTime}
            </span>
          )}
        </div>
      </div>
      <button
        // type="submit"
        // onClick={next}
        className="btn btn-danger btn-lg mb-5"
      >
        {form.destinationForm.submit}
      </button>
    </form>
  )
}

export default DatosDestinatario
