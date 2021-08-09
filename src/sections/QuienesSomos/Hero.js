import React from 'react'

// styles
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.hero_wrap}>
        <h1>
          El mundo en <br /> el que creemos
        </h1>
        <h3>
          El mundo actual necesita alivio, necesita cuidado, necesita curarse.
          Para mejorarlo, creemos que debemos recuperar y promover la
          comunicación de las personas basada en las personas intenciones, en la
          cooperación y la solidaridad. Los nuevos tiempos nos hacen transitar
          las actuales carreteras de la información, redes sociales, la web y
          queremos hacerlo de manera diferente y motivar e integrar gente a este
          viaje.
        </h3>
      </div>
    </main>
  )
}

export default Hero
