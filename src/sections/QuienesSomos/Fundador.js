import React from 'react'

// Styles
import styles from './fundador.module.scss'

const Fundador = ({ src, content, name, position, bg }) => {
  return (
    <section className={`bg-${bg} ${styles.fundador}`}>
      <div className={styles.fundador_grid}>
        <div className={styles.fundador_image}>
          <img src={src} alt={name} />
        </div>
        <div className={styles.fundador_content}>
          <p>&quot; {content} &quot;</p>

          <h2> {name} </h2>
          <h3> {position} </h3>
        </div>
      </div>
    </section>
  )
}

export default Fundador
