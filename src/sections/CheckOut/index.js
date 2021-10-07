import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

// components
import Plan from './Plan'
import Pagar from './Pagar'
import Regalo from './Regalo'
import Formularios from './Formularios'
import CompraFinalizada from './CompraFinalizada'

// Styles
import styles from './index.module.scss'

const FigureTimeline = ({
  title,
  stepper,
  isActive,
  complete,
  position,
  onChangePosition = () => {}
}) => {
  const renderButton = () => {
    const { locale } = useRouter()

    return (
      <button onClick={onChangePosition} className={`btn ${styles.figure_btn}`}>
        {locale === 'es-ES' ? 'cambiar' : 'change'}
      </button>
    )
  }

  const IMG = isActive
    ? '/images/logo-steps.svg'
    : '/images/logo-steps-empty.svg'

  const success = '/images/logo-steps-success.svg'
  const active = isActive ? 'figure_active' : 'figure_inactive'

  return (
    <div className={`${styles.figure} ${styles[active]}`}>
      <img src={complete ? success : IMG} alt="Logo Beews" />
      <span>{title}</span>
      {position < stepper && stepper !== 4 ? renderButton() : null}
    </div>
  )
}

const CheckOut = () => {
  const { locale, query } = useRouter()
  const [stepper, setStepper] = useState(() => {
    if (query.step) return parseInt(query.step)
    return 0
  })

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

  const handlePosition = (position) => {
    setStepper(position)
  }

  const props = {
    next,
    prev,
    locale,
    stepper
  }

  const steps = [
    {
      id: 'plan',
      title: {
        'es-ES': 'Escoge tu plan Beews',
        'en-US': 'Select your Beews plan.'
      },
      component: <Plan {...props} />
    },
    {
      id: 'form',
      title: {
        'es-ES': 'Llena el formulario',
        'en-US': 'Fill the form'
      },
      component: <Formularios {...props} />
    },
    {
      id: 'regalo',
      title: {
        'es-ES': 'Añade un regalo',
        'en-US': 'Pick a gift'
      },
      component: <Regalo {...props} />
    },
    {
      id: 'pago',
      title: {
        'es-ES': 'Ir a Pagar',
        'en-US': 'Finish purchase'
      },
      component: <Pagar {...props} />
    },
    {
      id: 'despego',
      title: {
        'es-ES': 'Tu Beews despegó',
        'en-US': 'Your Beews took off'
      },
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
                position={i}
                stepper={stepper}
                title={title[locale]}
                complete={i < stepper}
                isActive={i === stepper}
                onChangePosition={() => handlePosition(i)}
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
