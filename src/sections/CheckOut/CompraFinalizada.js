import useCheckout from '@/hooks/useCheckout'
import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

// styles
import styles from './compra-finalizada.module.scss'

const CompraFinalizada = () => {
  const { dataPedidoCreado } = useCheckout()
  const { locale } = useRouter()
  const { checkout } = translate[locale]
  const urlBase = 'https://api.whatsapp.com/send?phone=51920504820&text='
  let linkWhatsapp = ''

  if (dataPedidoCreado !== '') {
    linkWhatsapp = encodeURI(
      `${urlBase}Hola soy ${dataPedidoCreado.User.nombre} ${dataPedidoCreado.User.apellidos},\nAdquirí una experiencia Beews!\nEste mi número de pedido: ${dataPedidoCreado.pedidoId}`
    )
  }
  return (
    <div className={styles.compraFinalizada}>
      <div>
        <div className={styles.title}>
          <h1 className="display-1">{checkout.despego.title}</h1>
        </div>

        <div className={styles.grid}>
          <img
            src={
              locale === 'es-ES'
                ? '/images/compra-finalizada.png'
                : '/images/compra-finalizada-en.png'
            }
            alt=""
          />
          <div>
            <h2 className="display-2">{checkout.despego.subtitle}</h2>
            <p className="display-6">{checkout.despego.content}</p>

            <a
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
              href={linkWhatsapp}
            >
              <span>
                <img alt="Logo WhatsApp" src="/images/whatsapp.svg" />
              </span>
              {checkout.despego.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompraFinalizada
