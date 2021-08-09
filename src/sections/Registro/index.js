import Image from '@/components/Image'
import React from 'react'

// Styles
import styles from './registro.module.scss'

const Registro = () => {
  return (
    <div className={styles.registro}>
      <Image
        alt=""
        src="/images/hero-registro.png"
        className={styles.registro_sideimage}
      />
      <div className={styles.registro_content}>
        <h1>Regístrate</h1>
        <p>
          Completa el siguiente formulario <br /> para registrarte
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-floating">
            <input
              type="text"
              id="nameFloat"
              autoComplete="off"
              placeholder="Nombre"
              className={`form-control ${styles.registro_input}`}
            />
            <label htmlFor="nameFloat">Nombre</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              id="emailFloat"
              autoComplete="off"
              placeholder="Correo electrónico"
              className={`form-control ${styles.registro_input}`}
            />
            <label htmlFor="emailFloat">Correo electrónico</label>
          </div>
          <div className="form-floating">
            <input
              id="passFloat"
              type="password"
              autoComplete="off"
              placeholder="Contraseña"
              className={`form-control ${styles.registro_input}`}
            />
            <label htmlFor="passFloat">Contraseña</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              autoComplete="off"
              id="confirmPassFloat"
              placeholder="Confirmar contraseña"
              className={`form-control ${styles.registro_input}`}
            />
            <label htmlFor="confirmPassFloat">Confirmar contraseña</label>
          </div>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              id="termsCheck"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="termsCheck">
              Ya leí y acepto los <a href="#">términos y condiciones</a> de
              Beews
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              id="infoCheck"
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="infoCheck">
              Acepto recibir información comercial de Beews
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className={`btn btn-danger btn-lg text-white ${styles.registro_btn}`}
            >
              REGÍSTRATE
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registro
