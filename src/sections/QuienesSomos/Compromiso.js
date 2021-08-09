import React from 'react'

// Styles
import styles from './compromiso.module.scss'

const Compromiso = () => {
  return (
    <section className={styles.compromiso}>
      <div className={styles.compromiso_wrap}>
        <div className={styles.compromiso_title}>
          <h2>Nuestro compromiso</h2>
          <div className={styles.separador} />
        </div>

        <p>
          &quot;Nos comprometemos en ser un puente entre las personas que
          necesitan reencontrarse; entre los que tiene algo bueno que ofrecer y
          los que necesitan algo bueno y no lo encuentran; entre el talento
          humano y las personas que lo valoran&quot;
        </p>
      </div>
    </section>
  )
}

export default Compromiso
