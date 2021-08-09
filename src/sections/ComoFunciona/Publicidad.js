import React from 'react'

// Components
import Image from '@/components/Image'

// styles
import styles from './publicidad.module.scss'

const Publicidad = () => {
  return (
    <div className={styles.publicidad}>
      <Image className={styles.circle_1} src="/images/circle-red.svg" alt="" />
      <Image className={styles.circle_2} src="/images/circle-red.svg" alt="" />
      <Image
        alt=""
        className={styles.persona_1}
        src="/images/person-yellow1.svg"
      />
      <Image
        alt=""
        className={styles.persona_2}
        src="/images/person-yellow2.svg"
      />
      <div className={styles.publicidad_wrap}>
        <h2>
          No hay distancia <br /> que nos separe
        </h2>
        <h4>
          <span>
            <Image src="/images/instagram-white.svg" alt="Logo Instagram" />
          </span>
          ¡Siguenos en Instagram!
        </h4>
      </div>
    </div>
  )
}

export default Publicidad
