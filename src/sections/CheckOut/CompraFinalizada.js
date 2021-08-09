import React from 'react'
import Link from 'next/link'

// styles
import styles from './compra-finalizada.module.scss'

const CompraFinalizada = () => {
  return (
    <div className={styles.compraFinalizada}>
      <div>
        <h1 className="display-1">
          ¡Tu Beews <br /> está en camino!
        </h1>
        <h4>
          Pronto estaremos en contacto contigo para proporcionarte la
          información que necesitas
        </h4>

        <Link href="/">
          <a className="btn btn-outline-light btn-lg">Ir al home</a>
        </Link>
      </div>
      <img className={styles.mountain} src="/images/mountain.svg" alt="" />
    </div>
  )
}

export default CompraFinalizada
