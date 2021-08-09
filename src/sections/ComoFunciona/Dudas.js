import React from 'react'

// styles
import styles from './dudas.module.scss'

const Dudas = () => {
  return (
    <div className={styles.dudas}>
      <div className={styles.dudas_wrap}>
        <h1>¿Tienes alguna duda?</h1>
        <form
          className={styles.dudas_form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-floating mb-1">
            <input
              type="text"
              id="nameFloat"
              autoComplete="off"
              placeholder="Nombre"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="nameFloat">Nombre</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              id="emailFloat"
              autoComplete="off"
              placeholder="Email"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="emailFloat">Email</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              id="commentFloat"
              style={{ height: '100px' }}
              placeholder="¿Cómo de podemos ayudar?"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="commentFloat">¿Cómo de podemos ayudar?</label>
          </div>

          <button
            className={`btn btn-primary text-white btn-lg ${styles.dudas_formBtn}`}
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dudas
