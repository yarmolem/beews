import { translate } from '@/i18n/translate'
import React from 'react'

// styles
import styles from './formulario.module.scss'

const DatosDestinatario = ({ next, locale }) => {
  const {
    parents = [],
    checkout: { form }
  } = translate[locale]

  return (
    <form className={styles.formulario_form}>
      <div className="row">
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.name}</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.lastname}</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
      </div>
      <div className={styles.formulario_label}>
        <label>{form.destinationForm.label}</label>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.destinationForm.country}</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.destinationForm.city}</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">{form.destinationForm.district}</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.address}</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.reference}</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="mb-1">
        <label htmlFor="">{form.destinationForm.link}</label>
        <select type="text" aria-label="Username" className="form-control">
          {parents.map((text, i) => (
            <option key={`${text}-${i}`} value={i}>
              {text}
            </option>
          ))}
        </select>
      </div>
      <div className="row mb-1">
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.date}</label>
          <input
            type="date"
            className="form-control"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="col-12 col-md-6 mb-1">
          <label htmlFor="">{form.destinationForm.time}</label>
          <select type="text" aria-label="Username" className="form-control">
            <option value="0">8:00am - 9:00am</option>
            <option value="0">9:00am - 10:00am</option>
            <option value="0">10:00am - 11:00am</option>
            <option value="0">11:00am - 12:00am</option>
            <option value="0">12:00am - 01:00pm</option>
            <option value="0">01:00pm - 02:00pm</option>
            <option value="0">02:00pm - 03:00pm</option>
            <option value="0">03:00pm - 04:00pm</option>
            <option value="0">04:00pm - 05:00pm</option>
            <option value="0">05:00pm - 06:00pm</option>
            <option value="0">06:00pm - 07:00pm</option>
            <option value="0">07:00pm - 08:00pm</option>
          </select>
        </div>
      </div>

      <button onClick={next} className="btn btn-danger btn-lg mb-5">
        {form.destinationForm.submit}
      </button>
    </form>
  )
}

export default DatosDestinatario
