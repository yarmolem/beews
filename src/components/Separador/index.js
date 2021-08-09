import React, { useState } from 'react'

// components
import { InView } from 'react-intersection-observer'

// styles
import styles from './separador.module.scss'

const Separador = () => {
  const [load, setLoad] = useState(false)

  return (
    <InView onChange={(InView) => setLoad(InView)}>
      {load ? <div className={styles.separador} /> : null}
    </InView>
  )
}

export default Separador
