import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Terceros
import { motion } from 'framer-motion'

// styles
import styles from './sidebar.module.scss'
import useAuth from '@/hooks/useAuth'
import { translate } from '@/i18n/translate'

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const Sidebar = ({ isOpen = false, onClose }) => {
  const { push, locale } = useRouter()
  const { logout, isAuth } = useAuth()

  const { navbar } = translate[locale]

  return (
    <aside
      className={styles.sidebar}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <motion.div
        variants={fade}
        onClick={onClose}
        initial={{ opacity: 0 }}
        className={styles.sidebar_overlay}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        variants={variants}
        className={styles.sidebar_content}
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <button
          onClick={onClose}
          className={`btn ${styles.sidebar_buttonClose}`}
        >
          X
        </button>
        <img width={157} height={48} src="/images/logo.svg" alt="Logo Beews" />

        <ul className={styles.sidebar_links}>
          <li>
            <Link href="/">
              <a onClick={onClose}>{locale === 'es-ES' ? 'Inicio' : 'Home'}</a>
            </Link>
          </li>
          <li>
            <Link href="/quienes-somos">
              <a onClick={onClose}>{navbar.aboutUs}</a>
            </Link>
          </li>
          <li>
            <Link href="/como-funciona">
              <a onClick={onClose}>{navbar.howWorks}</a>
            </Link>
          </li>
          <li>
            <a onClick={onClose} href="#">
              {navbar.fair}
            </a>
          </li>
          <li>
            {/* eslint-disable */}
            {isAuth ? (
              <button
                onClick={() => {
                  logout()
                  push('/')
                }}
                className="btn text-danger"
              >
                {locale === 'es-ES' ? 'Cerrar sesión' : 'Logout'}
              </button>
            ) : null}
            {/* eslint-disable */}
            {!isAuth ? (
              <Link href="/registro">
                <a onClick={onClose}>{navbar.auth}</a>
              </Link>
            ) : null}
          </li>
        </ul>

        <button
          onClick={() => {
            onClose()
            push('/pedir-beews')
          }}
          className="btn btn-dark btn-lg"
        >
          {navbar.order}
        </button>
      </motion.div>
    </aside>
  )
}

export default Sidebar
