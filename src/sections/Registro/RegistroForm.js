import React from 'react'
import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './registro.module.scss'

const RegistroForm = ({ onToggleAuth = () => {} }) => {
  const { locale } = useRouter()
  const { registro } = translate[locale]

  return (
    <>
      <h1>{registro.title}</h1>
      <p>{registro.subtitle}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-floating">
          <input
            type="text"
            id="nameFloat"
            autoComplete="off"
            placeholder="Nombre"
            className={`form-control ${styles.registro_input}`}
          />
          <label htmlFor="nameFloat">{registro.placeholder.name}</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="emailFloat"
            autoComplete="off"
            placeholder="Correo electrónico"
            className={`form-control ${styles.registro_input}`}
          />
          <label htmlFor="emailFloat">{registro.placeholder.email}</label>
        </div>
        <div className="form-floating">
          <input
            id="passFloat"
            type="password"
            autoComplete="off"
            placeholder="Contraseña"
            className={`form-control ${styles.registro_input}`}
          />
          <label htmlFor="passFloat">{registro.placeholder.password}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            autoComplete="off"
            id="confirmPassFloat"
            placeholder="Confirmar contraseña"
            className={`form-control ${styles.registro_input}`}
          />
          <label htmlFor="confirmPassFloat">
            {registro.placeholder.confirmPassword}
          </label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" id="termsCheck" className="form-check-input" />
          <label className="form-check-label" htmlFor="termsCheck">
            {registro.terms()}
          </label>
        </div>
        <div className="form-check mb-2">
          <input id="infoCheck" type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="infoCheck">
            {registro.newsletter}
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className={`btn btn-danger btn-lg text-white ${styles.registro_btn}`}
          >
            {registro.submitBtn}
          </button>
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
