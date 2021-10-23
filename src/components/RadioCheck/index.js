import React from 'react'

// Styles
import styles from './radio.module.scss'

const RadioCheck = () => {
  return (
    <div className={styles.radiocheck}>
      <div>
        <input
          value="1"
          id="paypal"
          type="radio"
          name="metodopago"
          className="form-check-input"
        />
        <label htmlFor="paypal">
          <span className="visually-hidden">Pago con PayPal</span>
          <img src="/images/logo-paypal.svg" alt="Logo paypal" />
        </label>
      </div>
      <div>
        <input
          id="visa"
          value="2"
          type="radio"
          name="metodopago"
          className="form-check-input"
        />
        <label htmlFor="visa">
          <span className="visually-hidden">Pago con Visa</span>
          <img src="/images/logo-visa.svg" alt="Logo paypal" />
        </label>
      </div>
      <div>
        <input
          value="3"
          type="radio"
          id="mastercard"
          name="metodopago"
          className="form-check-input"
        />
        <label htmlFor="mastercard">
          <span className="visually-hidden">Pago con MastedCard</span>
          <img src="/images/logo-mastercard.svg" alt="Logo paypal" />
        </label>
      </div>
    </div>
  )
}

export default RadioCheck
