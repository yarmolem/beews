import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Icons
import { BarsIcon } from '@/components/SVGS'

// Styles
import styles from './navbar.module.scss'

const Navbar = ({ onOpen }) => {
  const { pathname, push } = useRouter()

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
                Quiénes somos
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
                Como funciona
              </a>
            </Link>
          </li>
          <li>
            <a href="#">Nuestra feria </a>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/registro">
              <a className={pathname === '/registro' ? styles.linkActive : ''}>
                Regístrate
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
              Pide un Beews
            </button>
          </li>
          <li>
            <a href="#">ESP / ENG</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
