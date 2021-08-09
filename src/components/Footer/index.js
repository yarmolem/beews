import React from 'react'

// Componentsj
import Image from '../Image'

// styles
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo-footer.svg"
        alt="logo Beews"
        className={styles.footer_logo}
      />

      <div className={styles.footer_item}>
        <ul className={styles.footer_links}>
          <li>
            <a href="#">Aviso de privacidad</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
          <li>
            <a href="#">Políticas de Cookies</a>
          </li>
          <li>
            <a href="#">FAQ’S</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer_item}>
        <p>Síguenos en nuestras redes</p>
        <div className={styles.footer_social}>
          <div className={styles.footer_socialIcon}>
            <Image src="/images/facebook.svg" alt="Logo Facebook" />
          </div>
          <div className={styles.footer_socialIcon}>
            <Image src="/images/youtube.svg" alt="Logo Facebook" />
          </div>
          <div className={styles.footer_socialIcon}>
            <Image src="/images/instagram.svg" alt="Logo Facebook" />
          </div>
          <div className={styles.footer_socialIcon}>
            <Image src="/images/linkedin.svg" alt="Logo Facebook" />
          </div>
        </div>
      </div>

      <div className={styles.footer_item}>
        <label className="mb-2">Suscríbete a nuestro newsletter</label>
        <div className={styles.footer_newsletter}>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe tu mail"
          />
          <button className="btn">Suscríbete</button>
        </div>
      </div>

      <div className={styles.footer_item}>
        <Image
          alt="Logo WhatsApp"
          src="/images/whatsapp.svg"
          className={styles.footer_wsp}
        />
      </div>
    </footer>
  )
}

export default Footer
