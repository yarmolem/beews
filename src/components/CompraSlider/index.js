import React from 'react'

// terceros
import Slider from 'react-slidy'

// styles
import styles from './compraslider.module.scss'

const CompraSlider = ({ initialSlide = 0 }) => {
  return (
    <div className={styles.compraslider}>
      <Slider {...{ initialSlide }}>
        <div className={`${styles.compraslider_item} ${styles.primary}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/elige.svg" alt="" />

          <h1 className="display-5">1. Elige</h1>

          <h2>Beews Standard</h2>
          <h4>
            Te invitamos a interactuar en línea, en vivo y en directo con la
            persona que amas.
          </h4>

          <hr />

          <h2>Beews Premium</h2>
          <h4>Donde interactúas y además grabamos y editamos la experiencia</h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.warning}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/regala.svg" alt="" />

          <h1 className="display-5 mb-3">2. Regala</h1>

          <h2 className="h4 mb-3">
            En nuestra Feria podrás encontrar un regalo especial y
            personalizado, hecho a mano por emprendedores locales.
          </h2>

          <h4 className="mb-5">
            *Los tiempos de entrega varian según la opción de regalo que
            escojas.
          </h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.danger}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/registrate.svg" alt="" />

          <h1 className="display-5 mb-3">3. Regístrate</h1>

          <h2 className="h4 mb-5">
            Completa tus datos en nuestro formulario para tener contacto contigo
          </h2>

          <h4>
            Un asesor se pondrá en contacto para orientarte en los detalles
            importantes sobre el evento
          </h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.orange}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/planifica.svg" alt="" />

          <h1 className="display-5 mb-3">4. Planifica</h1>

          <h2 className="h4 mb-3">
            Habiendo definido a quién, donde, cuando y con que sorprender con la
            experiencia que estamos construyendo juntos, registramos el pago.
          </h2>
        </div>
        <div className={`${styles.compraslider_item} ${styles.cyan}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/viaja.svg" alt="" />

          <h1 className="display-5 mb-3">5. Viaja</h1>

          <h2 className="h4 mb-3">
            Nuestro equipo de producción preparará la sorpresa y con tu ayuda,
            lograremos la conexión en línea que te permitirá disfrutar este
            momento inolvidable
          </h2>
        </div>
        <div className={`${styles.compraslider_item} ${styles.brown}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/disfruta.svg" alt="" />

          <h1 className="display-5 mb-3">¡Disfruta!</h1>

          <h2 className="h4 mb-3">
            Nuestro equipo de producción preparará la sorpresa y con tu ayuda,
            lograremos la conexión en línea que te permitirá disfrutar este
            momento inolvidable
          </h2>
        </div>
      </Slider>
    </div>
  )
}

export default CompraSlider
