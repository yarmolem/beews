import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Terceros
import { motion } from 'framer-motion'

// styles
import styles from './sidebar.module.scss'

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
  const { push } = useRouter()

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
              <a onClick={onClose}>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/quienes-somos">
              <a onClick={onClose}>Quiénes somos</a>
            </Link>
          </li>
          <li>
            <Link href="/como-funciona">
              <a onClick={onClose}>Como funciona</a>
            </Link>
          </li>
          <li>
            <a onClick={onClose} href="#">
              Nuestra feria
            </a>
          </li>
          <li>
            <Link href="/registro">
              <a onClick={onClose}>Regístrate</a>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => {
            onClose()
            push('/pedir-beews')
          }}
          className="btn btn-dark btn-lg"
        >
          Pide un Beews
        </button>
      </motion.div>
    </aside>
  )
}

export default Sidebar
