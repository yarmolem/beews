import { useRouter } from 'next/dist/client/router'
import React from 'react'

// styles
import Image from '@/components/Image'
import styles from './comunidad.module.scss'
import { translate } from '@/i18n/translate'

const ComunidadPage = () => {
  const { locale } = useRouter()
  const {
    index: { Comunidad }
  } = translate[locale]

  return (
    <div>
      <div className={styles.comunidad}>
        <h3>{Comunidad.title}</h3>
        <h4>{Comunidad.subtitle}</h4>
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

export default ComunidadPage
