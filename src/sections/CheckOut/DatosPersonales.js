import React from 'react'

// styles
import styles from './formulario.module.scss'

const DatosPersonales = ({ nextStep }) => {
  return (
    <form className={styles.formulario_form}>
      <div className="mb-1">
        <label htmlFor="">Nombres y apellidos</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="mb-1">
        <label htmlFor="">Correo electrónico</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="row">
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">Celular</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">Fijo</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">Código postal</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">País</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">Departamento</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">Distrito</label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
      </div>

      <button onClick={nextStep} className="btn btn-primary btn-lg">
        Siguiente
      </button>
    </form>
  )
}

export default DatosPersonales
