import React from 'react'

// Components
import Image from '@/components/Image'
import { IconButton } from '@/components/Buttons'

// styles
import styles from './commonSection.module.scss'

const CommonSection = ({ image, title, content, buttonContent, theme }) => {
  return (
    <section className={styles[theme]}>
      <div className={styles.commonSection}>
        <div className={styles.commonSection_content}>
          {theme === 'dark' ? <h3>{title}</h3> : <h2>{title}</h2>}
          <p>{content}</p>

          <IconButton color="primary">{buttonContent}</IconButton>
        </div>

        <div className={styles.commonSection_img}>
          <Image src={image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default CommonSection
