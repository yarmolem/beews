import { useRouter } from 'next/dist/client/router'
import React from 'react'

import Image from '@/components/Image'
import useToast from '@/hooks/useToast'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import { Premium, Xperience } from '@/data/pricing'

// Styles
import styles from './productos.module.scss'

const Productos = () => {
  const { toast } = useToast()
  const { loadPlan } = useCheckout()
  const { locale, push } = useRouter()

  const handlePlan = ({ id, title, price }) => {
    loadPlan({ id, title, price })
    toast({
      title: 'Éxito',
      msg: `Plan ${id} seleccionado`,
      hideProgressBar: true
    })
    push({
      pathname: '/check-out',
      query: { step: 1, plan: id }
    })
  }

  const {
    comoFunciona: { productos }
  } = translate[locale]

  return (
    <div className={styles.productos}>
      <Image className={styles.cloud_1} src="/images/cloud-white.svg" />
      <Image className={styles.cloud_2} src="/images/cloud-white.svg" />

      <img
        src={
          locale === 'es-ES'
            ? '/images/tarjeta-paquete.png'
            : '/images/tarjeta-paquete-en.png'
        }
        alt=""
        className={styles.productos_letter}
      />

      <h4>{productos.content}</h4>

      <div className={styles.productos_btn}>
        <button
          onClick={() =>
            handlePlan({ ...Xperience, title: Xperience.title[locale] })
          }
          className="btn btn-light btn-lg"
        >
          <span>Beews Xperience</span>
        </button>
        <button
          onClick={() =>
            handlePlan({ ...Premium, title: Premium.title[locale] })
          }
          className="btn btn-light btn-lg"
        >
          <span>Beews Premium</span>
        </button>
      </div>
    </div>
  )
}

export default Productos
