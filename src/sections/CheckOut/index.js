import React, { useEffect, useState } from 'react'
import CompraFinalizada from './CompraFinalizada'
import Formulario from './Formulario'

// Styles
import styles from './index.module.scss'
import Pagar from './Pagar'
import Plan from './Plan'
import Regalo from './Regalo'

const FigureTimeline = ({ isActive, title, complete }) => {
  const IMG = isActive
    ? '/images/logo-steps.svg'
    : '/images/logo-steps-empty.svg'

  const success = '/images/logo-steps-success.svg'

  const active = isActive ? 'figure_active' : 'figure_inactive'

  return (
    <div className={`${styles.figure} ${styles[active]}`}>
      <img src={complete ? success : IMG} alt="Logo Beews" />
      <span> {title} </span>
    </div>
  )
}

const CheckOut = () => {
  const [stepper, setStepper] = useState(0)

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [stepper])

  const next = () => {
    if (stepper === steps.length) return
    setStepper((s) => s + 1)
  }

  const prev = () => {
    if (stepper === 0) return
    setStepper((s) => s - 1)
  }

  const props = {
    next,
    prev,
    stepper
  }

  const steps = [
    {
      id: 'plan',
      title: 'Escoge tu plan Beews',
      component: <Plan {...props} />
    },
    {
      id: 'regalo',
      title: 'Añade un regalo',
      component: <Regalo {...props} />
    },
    {
      id: 'form',
      title: 'Llena el formulario',
      component: <Formulario {...props} />
    },
    {
      id: 'pago',
      title: 'Ir a Pagar',
      component: <Pagar {...props} />
    },
    {
      id: 'despego',
      title: 'Tu Beews despegó',
      component: <CompraFinalizada {...props} />
    }
  ]

  return (
    <div className={styles.checkout}>
      <nav className={styles.checkout_navegation}>
        <ul>
          {steps.map(({ id, title }, i) => (
            <li key={id}>
              <FigureTimeline
                title={title}
                complete={i < stepper}
                isActive={i === stepper}
              />
            </li>
          ))}
        </ul>
        <div className={styles.checkout_timeline} />
      </nav>

      <section>{steps[stepper].component}</section>
    </div>
  )
}

export default CheckOut
