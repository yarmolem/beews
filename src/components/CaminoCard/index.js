import React from 'react'

// components
import Image from '../Image'

// Icons
import { PlusCircleIcon, PlusCircleIconDark } from '@/components/SVGS'

// styles
import styles from './camino_card.module.scss'
import { useRouter } from 'next/dist/client/router'

const CaminoCard = ({ num, title, src, bg, onClick }) => {
  const { locale } = useRouter()
  return (
    <div className={`${styles[bg]} ${styles.card}`}>
      <Image alt="" src={src} className={styles.card_image} />
      {num ? <h2 className={styles.card_num}>{num}</h2> : null}
      <h2 className={styles.card_title}>{title[locale]}</h2>

      <button onClick={onClick} className="btn">
        {bg === 'gray' ? <PlusCircleIconDark /> : <PlusCircleIcon />}
      </button>
    </div>
  )
}

export default CaminoCard
