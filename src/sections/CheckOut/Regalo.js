import React from 'react'
import Slider from 'react-slidy'

// Styles
import styles from './regalo.module.scss'

const Regalo = ({ next, prev }) => {
  return (
    <div className={styles.regalo}>
      <div className={styles.regalo_num}>
        <h1>2</h1>
      </div>
      <h2>
        Añade un regalo <br />a tu viaje
      </h2>
      <h3>
        Escoge el detalle con el que quieres <br /> acompañar tu Beews
      </h3>

      <Slider>
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>

      <div className={styles.regalo_cards}>
        <div className={styles.regalo_cards1}>
          <img src="/images/regalo-icon.svg" alt="" />
          <h3>¿No encuentras lo que pensabas regalar?</h3>
          <p style={{ fontFamily: 'SofiaProRegular' }}>¡No te preocupes!</p>
          <p>
            Nuestro asesor personalizado se encargará de encontrar en el
            mercado, el producto que quieres regalar para complementar el
            servicio
          </p>
        </div>
        <div className={styles.regalo_cards2}>
          <img src="/images/asesor-icon.svg" alt="" />
          <h3>Sobre el asesor</h3>
          <p>
            Una vez contrates el servicio, te asignaremos un asesor para que te
            ayude a planificar la sorpresa.
          </p>
          <h5>
            En el caso que no hayas encontrado el regalo ideal, puedes coordinar
            con él la compra de otro proveedor (*)
          </h5>

          <h5>
            o si gustas puedes enviar a nuestra dirección el regalo desde donde
            estes.
          </h5>
          <small>
            *Se generará una factura complementaria por el valor del producto a
            adquitir que puede ser cancelado em nuestra página de pagos
          </small>
        </div>
      </div>

      <button
        onClick={next}
        className={`btn btn-primary text-white btn-lg mx-1 ${styles.regalo_button}`}
      >
        Siguiente
      </button>
    </div>
  )
}

function SliderItem() {
  return (
    <div className={styles.regalo_slider}>
      <div className={styles.regalo_sliderGrid}>
        <img
          alt=""
          src="/images/co-regalo-1.png"
          className={styles.regalo_sliderGridImg}
        />
        <img
          alt=""
          src="/images/co-regalo-2.png"
          className={styles.regalo_sliderGridImg}
        />
        <img
          alt=""
          src="/images/co-regalo-3.png"
          className={styles.regalo_sliderGridImg}
        />
        <img
          alt=""
          src="/images/co-regalo-4.png"
          className={styles.regalo_sliderGridImg}
        />
      </div>
      <div className={styles.regalo_sliderContent}>
        <h3>Katya Art</h3>
        <h4>Ilustraciones Personalizadas</h4>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt nec magna porta molestie. Aliquam quis euismod elit, id
          aliquam lectus. Phasellus fringilla, turpis at suscipit congue, justo
          orci malesuada magna, ut porttitor felis nibh quis diam.
        </h5>
        <button className="btn btn-outline-primary">Colaborar con Katya</button>
      </div>
    </div>
  )
}

export default Regalo
