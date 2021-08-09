import Image from '@/components/Image'
import React from 'react'

// Styles
import styles from './productos.module.scss'

const Productos = () => {
  return (
    <div className={styles.productos}>
      <Image className={styles.cloud_1} src="/images/cloud-white.svg" />
      <Image className={styles.cloud_2} src="/images/cloud-white.svg" />

      <h1>¿Listo para pedir un Beews?</h1>

      <h4>
        Escoge el paquete que desees y comencemos juntos esta increible aventura
      </h4>

      <div className={styles.productos_btn}>
        <button className="btn btn-light btn-lg">
          <span>Beews Xperience</span>
        </button>
        <button className="btn btn-light btn-lg">
          <span>Beews Premium</span>
        </button>
      </div>
    </div>
  )
}

export default Productos
