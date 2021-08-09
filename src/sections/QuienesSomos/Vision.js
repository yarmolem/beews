import React from 'react'

// styles
import styles from './vision.module.scss'

const Vision = () => {
  return (
    <section className={styles.vision}>
      <article className={styles.vision_item}>
        <img src="/images/vision1_cp.webp" alt="" />

        <p>
          <strong>
            Creemos en los mensajes positivos, creemos en integrar, en eliminar
            las distancias y barreras que nos separan, creemos en el amor y todo
            lo que trae consigo.
          </strong>{' '}
          Para nosotros cuando existe amor no hay distancias.
        </p>

        <strong>El amor viaja.</strong>
      </article>

      <article className={styles.vision_item}>
        <img src="/images/vision2_cp.webp" alt="" className="mb-5" />

        <p>
          <strong>
            Queremos construir cadenas de valor que incluyan nuevos
            protagonistas talentosos,
          </strong>{' '}
          Que reciban el justo precio a su trabajo y la real valoración de su
          trabajo.
        </p>
      </article>

      <article className={styles.vision_item}>
        <img src="/images/vision3_cp.webp" alt="" className="mb-3" />

        <p>
          <strong>
            Creemos en la tecnologia, la valoramos y disfrutamos, pero tambien
            en las personas y sus capacidades profesionales,
          </strong>{' '}
          creemos en el desarrollo que genere riqueza, trabajo y el progreso,
          para todos.
        </p>
      </article>
    </section>
  )
}

export default Vision
