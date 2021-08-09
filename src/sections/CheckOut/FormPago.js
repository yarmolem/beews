import RadioCheck from '@/components/RadioCheck'
import React from 'react'

// Styles
import styles from './pagar.module.scss'

const FormPago = ({ next }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.form}>
        <div className={styles.form_tarjeta}>
          <label htmlFor="">Número de tarjeta</label>
          <input className="form-control" type="text" />
        </div>
        <div className={styles.form_checkbox}>
          <RadioCheck />
        </div>

        <div className={styles.form_total}>
          <input type="text" value="S/ 265" className="form-control" readOnly />
        </div>
        <div className={styles.form_name}>
          <label htmlFor="">Nombre y Apellido del titular de la tarjeta</label>
          <input className="form-control" type="text" />
        </div>
        <div className={styles.split}>
          <div className={styles.form_vencimiento}>
            <label htmlFor="">Fecha de vencimiento</label>
            <div className={styles.form_vencimientoGrid}>
              <div>
                <input className="form-control" type="text" />
              </div>
              <span>/</span>
              <div>
                <input className="form-control" type="text" />
              </div>
            </div>
          </div>
          <div className={styles.form_codigo}>
            <label htmlFor="">Código de Seguridad</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className={styles.form_seguro}>
          <img src="/images/lock.svg" alt="" />
          <span>Ambiente seguro</span>
        </div>
      </div>

      <button
        onClick={next}
        type="submit"
        className="btn btn-lg text-white mt-3"
      >
        Finalizar compra
      </button>
    </form>
  )
}

export default FormPago
