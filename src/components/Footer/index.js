import useToast from '@/hooks/useToast'
import { translate } from '@/i18n/translate'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'

import React, { useState } from 'react'
import { CREAR_SUSCRIPCION_MUTATION } from 'src/graphql/mutation/crearSuscripcion_mutation'

// Componentsj
import Image from '../Image'
import Loader from '../Loader/Loader'

// styles
import styles from './footer.module.scss'

const Footer = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const { toast } = useToast()
  const { footer } = translate[locale]

  const [mensajeError, setMensajeError] = useState(null)
  const [inputSuscribete, setInputSuscribete] = useState('')
  const handleChangeInputSuscribete = (e) => {
    setInputSuscribete(e.target.value)
  }

  const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }

  const [crearSuscripcionMutation, { loading }] = useMutation(
    CREAR_SUSCRIPCION_MUTATION,
    {
      onError: (err) => {
        const error = err?.graphQLErrors[0]?.debugMessage
        if (error === 'CORREO_EXISTE') {
          console.log('error ', error)
          setMensajeError('Este correo ya fue registrado')
        } else {
          console.log('Error desconocido: ', error)
        }
      },
      onCompleted: (data) => {
        setMensajeError(null)
        setInputSuscribete('')
        toast({
          title: 'Exitoso',
          msg: 'Suscripción exitosa',
          hideProgressBar: true
        })
      }
    }
  )

  const crearSuscripcion = async () => {
    setMensajeError(null)
    if (validarEmail(inputSuscribete)) {
      const request = await crearSuscripcionMutation({
        variables: {
          input: {
            email: inputSuscribete
          }
        }
      })
      console.log('request : ', request)
    } else {
      setMensajeError('Correo inválido')
    }
  }

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
            href="https://www.instagram.com/beews.sitenp "
          >
            <Image src="/images/instagram.svg" alt="Logo Instagram" />
          </a>
          <div className={styles.footer_socialIcon}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/beews/"
            >
              <Image src="/images/linkedin.svg" alt="Logo linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer_item}>
        <label className="mb-2">{footer.newsletter}</label>
        <div className={styles.footer_newsletter}>
          <input
            type="email"
            className="form-control"
            value={inputSuscribete}
            onChange={handleChangeInputSuscribete}
            placeholder={footer.email}
          />
          {loading ? <Loader size="sm" /> : null}
          {!loading && (
            <button onClick={crearSuscripcion} className="btn">
              {footer.suscribete}
            </button>
          )}
        </div>
        <p>{mensajeError}</p>
      </div>

      <div className={styles.footer_item}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/aozmg9"
        >
          <Image
            alt="Logo WhatsApp"
            src="/images/whatsapp.svg"
            className={styles.footer_wsp}
          />
        </a>
      </div>

      <div className={styles.footer_derechos}>
        <span>Beews 2021</span>
        <p>{footer.derechos}</p>
      </div>
    </footer>
  )
}

export default Footer
