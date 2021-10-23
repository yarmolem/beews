import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

// styles
import styles from './cardPricing.module.scss'

const CardPricing = ({
  id,
  title,
  price,
  theme,
  footer,
  content,
  isChosen,
  onChoose = () => {}
}) => {
  const { locale } = useRouter()
  const {
    index: { Pricing }
  } = translate[locale]

  const handleChosen = () => {
    const basic = styles.card_overlay
    const persist = styles.card_chosen
    return isChosen ? persist : basic
  }

  return (
    <article className={`${styles[theme]} ${styles.card_pricing}`}>
      <div className={handleChosen()}>
        <button
          onClick={() => onChoose({ id, title: title[locale], price })}
          className="btn btn-lg text-dark"
        >
          {Pricing.chooseBtn}
        </button>
      </div>
      <h1>{title[locale]}</h1>

      {content[locale].map((text, i) => (
        <p key={i}>&bull; {text}</p>
      ))}

      <div
        style={{ marginBottom: footer ? '' : '3.5rem' }}
        className={styles.card_pricingBox}
      >
        <h5>US$ {price}</h5>
      </div>

      <span>{footer[locale]}</span>
    </article>
  )
}

export default CardPricing
