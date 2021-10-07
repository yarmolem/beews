import React from 'react'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './fundador.module.scss'

const Fundador = ({ src, content, name, position, nick }) => {
  const { locale } = useRouter()

  return (
    <section className={styles.fundador}>
      <div className={styles.fundador_grid}>
        <div className={styles.fundador_image}>
          <img src={src} alt={name} />
          <div className={styles.fundador_image_name}>
            <h2>{nick}</h2>
          </div>
        </div>
        <div className={styles.fundador_content}>
          <p>&quot; {content[locale]} &quot;</p>

          <h2> {name} </h2>
          <h3> {position[locale]} </h3>
        </div>
      </div>
    </section>
  )
}

export default Fundador
