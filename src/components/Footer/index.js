import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'

import React from 'react'

// Componentsj
import Image from '../Image'

// styles
import styles from './footer.module.scss'

const Footer = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const { footer } = translate[locale]

  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo-white.svg"
        alt="logo Beews"
        className={styles.footer_logo}
      />

      <div className={styles.footer_item}>
        <ul className={styles.footer_links}>
          <li onClick={() => router.push('/politica-de-privacidad')}>
            <a href="#">{footer.privacidad}</a>
          </li>
          <li onClick={() => router.push('/terminos-condiciones')}>
            <a href="#">{footer.terms}</a>
          </li>
          <li onClick={() => router.push('/politica-de-cookies')}>
            <a href="#">{footer.cookies}</a>
          </li>
          <li>
            <a href="#">FAQ’S</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer_item}>
        <p>{footer.redes}</p>
        <div className={styles.footer_social}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer_socialIcon}
            href="https://www.facebook.com/Beews.site"
          >
            <Image src="/images/facebook.svg" alt="Logo Facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer_socialIcon}
            href="https://www.youtube.com/channel/UCY0sfAoKS7xWTfL2-GhEWFA"
          >
            <Image src="/images/youtube.svg" alt="Logo Youtube" />
          </a>
          <a
            className={styles.footer_socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/beews.site"
          >
            <Image src="/images/instagram.svg" alt="Logo Instagram" />
          </a>
          <div className={styles.footer_socialIcon}>
            <Image src="/images/linkedin.svg" alt="Logo linkedin" />
          </div>
        </div>
      </div>

      <div className={styles.footer_item}>
        <label className="mb-2">{footer.newsletter}</label>
        <div className={styles.footer_newsletter}>
          <input
            type="text"
            className="form-control"
            placeholder={footer.email}
          />
          <button className="btn">{footer.suscribete}</button>
        </div>
      </div>

      <div className={styles.footer_item}>
        <Image
          alt="Logo WhatsApp"
          src="/images/whatsapp.svg"
          className={styles.footer_wsp}
        />
      </div>

      <div className={styles.footer_derechos}>
        <span>Beews 2021</span>
        <p>{footer.derechos}</p>
      </div>
    </footer>
  )
}

export default Footer
