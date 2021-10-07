import React from 'react'
import { useRouter } from 'next/dist/client/router'

// styles
import styles from './dudas.module.scss'
import { translate } from '@/i18n/translate'

const Dudas = () => {
  const { locale } = useRouter()
  const {
    comoFunciona: { form }
  } = translate[locale]

  return (
    <div className={styles.dudas}>
      <div className={styles.dudas_wrap}>
        <h1>{form.title}</h1>
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
            <label htmlFor="nameFloat">{form.placeholder.name}</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              id="emailFloat"
              autoComplete="off"
              placeholder="Email"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="emailFloat">{form.placeholder.email}</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              id="commentFloat"
              style={{ height: '100px' }}
              placeholder="¿Cómo de podemos ayudar?"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="commentFloat">{form.placeholder.textarea}</label>
          </div>

          <button className={`btn text-white btn-lg ${styles.dudas_formBtn}`}>
            {form.submit}
          </button>
        </form>
        <img src="/images/brown_wave.svg" alt="" className={styles.wave1} />
        <img src="/images/brown_wave.svg" alt="" className={styles.wave2} />
      </div>
    </div>
  )
}

export default Dudas
