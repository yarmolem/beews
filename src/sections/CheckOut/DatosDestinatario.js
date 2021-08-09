import React from 'react'

// styles
import styles from './formulario.module.scss'

const DatosDestinatario = ({ next }) => {
  return (
    <form className={styles.formulario_form}>
      <div className={styles.formulario_label}>
        <label htmlFor="">Nombres y apellidos del destinatario</label>
      </div>
      <div className="mb-1">
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className={styles.formulario_label}>
        <label>¿Donde se realizará la entrega?</label>
      </div>
      <div className="row">
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
      <div className="mb-1">
        <label htmlFor="">Dirección</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="mb-1">
        <label htmlFor="">Referencia</label>
        <input type="text" aria-label="Username" className="form-control" />
      </div>
      <div className="row mb-1">
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">
            ¿Cuál es el vínculo que tienes con el destinatario
          </label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">
            Fecha sugerida para <br /> la entrega
          </label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <label htmlFor="">
            Hora sugerida para <br /> la entrega
          </label>
          <input type="text" aria-label="Username" className="form-control" />
        </div>
      </div>

      <button onClick={next} className="btn btn-primary btn-lg mb-5">
        Resgistrar formulario
      </button>
    </form>
  )
}

export default DatosDestinatario
