import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Icons
import { BarsIcon } from '@/components/SVGS'

// Styles
import styles from './navbar.module.scss'
import { translate } from '@/i18n/translate'

const Navbar = ({ onOpen }) => {
  const { pathname, push, locale } = useRouter()
  const { navbar } = translate[locale]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_wrap}>
        <button onClick={onOpen} className={styles.navbar_bars}>
          <BarsIcon className={styles.navbar_barsIcon} />
        </button>
        <Link href="/">
          <a className={styles.navbar_logo}>
            <img
              width={157}
              height={48}
              alt="logo Beews"
              src="/images/logo.svg"
            />
          </a>
        </Link>

        <ul>
          <li>
            <Link href="/quienes-somos">
              <a
                className={
                  pathname === '/quienes-somos' ? styles.linkActive : ''
                }
              >
                {navbar.aboutUs}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/como-funciona">
              <a
                className={
                  pathname === '/como-funciona' ? styles.linkActive : ''
                }
              >
                {navbar.howWorks}
              </a>
            </Link>
          </li>
          <li>
            <a href="#">{navbar.fair} </a>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/registro">
              <a className={pathname === '/registro' ? styles.linkActive : ''}>
                <p style={{ lineHeight: '16px', margin: 0, width: '100px' }}>
                  {navbar.auth}
                </p>
              </a>
            </Link>
          </li>
          <li>
            <button
              onClick={() => push('/pedir-beews')}
              className={
                pathname === '/pedir-beews'
                  ? 'btn btn-primary text-white'
                  : 'btn btn-dark'
              }
            >
              {navbar.order}
            </button>
          </li>
          <li>
            <Link href={pathname} locale="es-ES">
              <a style={{ fontWeight: locale === 'es-ES' ? 'bold' : 'unset' }}>
                ESP
              </a>
            </Link>
            <span>{' / '}</span>
            <Link href={pathname} locale="en-US">
              <a style={{ fontWeight: locale === 'en-US' ? 'bold' : 'unset' }}>
                ENG
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
