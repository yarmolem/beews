import React from 'react'

// styles
import Image from '@/components/Image'
import styles from './comunidad.module.scss'

const Comunidad = () => {
  return (
    <div>
      <div className={styles.comunidad}>
        <h3>Sé parte de la comunidad Beews</h3>
        <h4>Instagram News</h4>
      </div>

      <div className={styles.comunidad_grid}>
        <Image alt="" src="/images/comunidad1_cp.webp" />
        <Image alt="" src="/images/comunidad2_cp.webp" />
        <Image alt="" src="/images/comunidad3_cp.webp" />
        <Image alt="" src="/images/comunidad4_cp.webp" />
        <Image alt="" src="/images/comunidad3_cp.webp" />
        <Image alt="" src="/images/comunidad4_cp.webp" />
      </div>
    </div>
  )
}

export default Comunidad
