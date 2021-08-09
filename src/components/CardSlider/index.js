import React from 'react'

// terceros
import Slider from 'react-slidy'

// styles
import styles from './cardslider.module.scss'

const CardSlider = ({ onToggle, initialSlide = 0 }) => {
  return (
    <div className={styles.cardslider}>
      <Slider {...{ initialSlide }}>
        <div className={`${styles.cardslider_item} ${styles.primary}`}>
          <svg
            width="71"
            height="120"
            viewBox="0 0 71 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.4803 86.0927H33.3165C32.7487 86.0927 32.2269 85.8164 31.9047 85.3407L3.74446 44.4739C3.69842 44.3972 3.65238 44.3358 3.62169 44.259C1.21235 40.0082 0 35.4657 0 30.7237C0 13.7816 15.914 0.000732422 35.4803 0.000732422C55.0467 0.000732422 70.9606 13.7816 70.9606 30.7237C70.9606 35.4657 69.7483 40.0235 67.3389 44.259C67.3082 44.3358 67.2622 44.3972 67.2162 44.4739L39.056 85.3407C38.7337 85.8011 38.2119 86.0927 37.6441 86.0927H35.4803ZM34.2373 82.6398H35.4957H36.7387L64.3157 42.6017C66.4489 38.8725 67.5231 34.8825 67.5231 30.7237C67.5231 15.6845 53.1437 3.45362 35.4803 3.45362C17.8169 3.45362 3.43754 15.6845 3.43754 30.7237C3.43754 34.8825 4.51177 38.8879 6.64489 42.6017L34.2373 82.6398Z"
              fill="#BA7CE6"
            />
            <path
              d="M37.0914 86.0919H33.884C33.086 86.0919 32.3954 85.5548 32.2113 84.7722L17.2795 22.9272C17.2641 22.8811 17.2641 22.8197 17.2488 22.7737C16.9418 21.4232 16.8037 20.0574 16.8037 18.6916C16.7884 8.39435 25.1827 0 35.48 0C45.7926 0 54.1716 8.39435 54.1716 18.6916C54.1716 20.0574 54.0182 21.4232 53.7266 22.7737C53.7266 22.8197 53.7112 22.8811 53.6959 22.9272L38.7641 84.7722C38.5646 85.5395 37.874 86.0919 37.0914 86.0919ZM35.2345 82.639H35.7255L50.3044 22.2519C50.3044 22.2212 50.3197 22.1752 50.3197 22.1445C50.5806 21.0089 50.7187 19.8579 50.7187 18.707C50.7187 10.2973 43.8744 3.45288 35.4647 3.45288C27.055 3.45288 20.2106 10.2973 20.2106 18.707C20.2106 19.8579 20.3487 21.0089 20.6096 22.1445C20.6249 22.1752 20.6249 22.2212 20.6249 22.2519L35.2345 82.639Z"
              fill="#BA7CE6"
            />
            <path
              d="M36.3244 58.5763C22.7891 58.5763 12.5685 55.415 11.924 55.2155C11.0186 54.9239 10.5121 53.9571 10.8037 53.0517C11.0953 52.1462 12.0621 51.6398 12.9675 51.9314C13.1977 52.0081 35.9254 59.0213 57.9931 51.9314C58.8986 51.6398 59.8654 52.1462 60.1569 53.0517C60.4485 53.9571 59.9421 54.9239 59.0367 55.2155C51.1641 57.7322 43.3069 58.5763 36.3244 58.5763Z"
              fill="#BA7CE6"
            />
            <path
              d="M16.3744 86.0121C13.52 86.0121 11.1567 88.3601 11.1567 91.2298V114.387C11.1567 117.242 13.5047 119.605 16.3744 119.605H54.5863C57.4407 119.605 59.804 117.257 59.804 114.387V91.2298C59.804 88.3754 57.4561 86.0121 54.5863 86.0121H16.3744ZM16.7581 89.4957H54.2334L36.5546 105.272C35.8794 105.87 35.1274 105.87 34.4522 105.272L16.7581 89.4957ZM14.6403 92.258L26.5489 102.878L14.6403 114.31V92.258ZM56.3205 92.258V114.295L44.4579 102.862L56.3205 92.258ZM41.849 105.195L53.1898 116.121H17.7709L29.1578 105.21L32.1503 107.865C34.0532 109.553 36.9843 109.553 38.8872 107.865L41.849 105.195Z"
              fill="#BA7CE6"
            />
          </svg>

          <h1>Planeamos</h1>
          <h2>We plan</h2>

          <h4>
            <strong>
              Nos convertimos en tu contacto en Lima para preparar la sorpresa,
            </strong>{' '}
            somos cómplices para planificar la experiencia.
          </h4>
          <h4>Definimos juntos dónde, cómo y cuándo realizar la entrega.</h4>

          <button onClick={onToggle} className="btn">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8204 25.8889C20.6675 25.8889 26.2182 20.3382 26.2182 13.4911C26.2182 6.64401 20.6675 1.09335 13.8204 1.09335C6.97336 1.09335 1.42269 6.64401 1.42269 13.4911C1.42269 20.3382 6.97336 25.8889 13.8204 25.8889ZM13.8204 26.9822C21.2714 26.9822 27.3115 20.942 27.3115 13.4911C27.3115 6.04017 21.2714 0 13.8204 0C6.36952 0 0.329346 6.04017 0.329346 13.4911C0.329346 20.942 6.36952 26.9822 13.8204 26.9822Z"
                fill="#7B6D51"
              />
              <rect
                x="7.62476"
                y="12.2896"
                width="13.1202"
                height="2.18669"
                fill="#7B6D51"
              />
            </svg>
          </button>
        </div>
        <div className={`${styles.cardslider_item} ${styles.warning}`}>
          <svg
            width="72"
            height="122"
            viewBox="0 0 72 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 87.3535H33.8045C33.2284 87.3535 32.699 87.0733 32.372 86.5906L3.79931 45.1252C3.7526 45.0473 3.70588 44.985 3.67474 44.9072C1.2301 40.594 0 35.985 0 31.1736C0 13.9833 16.1471 0.000610352 36 0.000610352C55.8529 0.000610352 72 13.9833 72 31.1736C72 35.985 70.7699 40.6096 68.3253 44.9072C68.2941 44.985 68.2474 45.0473 68.2007 45.1252L39.628 86.5906C39.301 87.0577 38.7716 87.3535 38.1955 87.3535H36ZM34.7388 83.8501H36.0156H37.2768L65.2578 43.2255C67.4221 39.4418 68.5121 35.3933 68.5121 31.1736C68.5121 15.9141 53.9221 3.50407 36 3.50407C18.0779 3.50407 3.48789 15.9141 3.48789 31.1736C3.48789 35.3933 4.57785 39.4574 6.74221 43.2255L34.7388 83.8501Z"
              fill="#F9B046"
            />
            <path
              d="M37.6346 87.3531H34.3803C33.5706 87.3531 32.8699 86.8081 32.683 86.014L17.5325 23.2631C17.517 23.2164 17.517 23.1541 17.5014 23.1074C17.19 21.7371 17.0498 20.3513 17.0498 18.9655C17.0343 8.51742 25.5516 0.00012207 35.9997 0.00012207C46.4633 0.00012207 54.965 8.51742 54.965 18.9655C54.965 20.3513 54.8093 21.7371 54.5135 23.1074C54.5135 23.1541 54.4979 23.2164 54.4824 23.2631L39.3318 86.014C39.1294 86.7925 38.4287 87.3531 37.6346 87.3531ZM35.7505 83.8496H36.2488L51.0412 22.578C51.0412 22.5468 51.0567 22.5001 51.0567 22.469C51.3215 21.3167 51.4616 20.1489 51.4616 18.9811C51.4616 10.4482 44.517 3.50358 35.9841 3.50358C27.4512 3.50358 20.5066 10.4482 20.5066 18.9811C20.5066 20.1489 20.6467 21.3167 20.9114 22.469C20.927 22.5001 20.927 22.5468 20.927 22.578L35.7505 83.8496Z"
              fill="#F9B046"
            />
            <path
              d="M36.8562 59.4345C23.1227 59.4345 12.7524 56.2269 12.0985 56.0244C11.1798 55.7286 10.6659 54.7476 10.9618 53.8289C11.2576 52.9102 12.2386 52.3964 13.1573 52.6922C13.3908 52.7701 36.4514 59.886 58.8424 52.6922C59.7611 52.3964 60.742 52.9102 61.0379 53.8289C61.3337 54.7476 60.8199 55.7286 59.9012 56.0244C51.9133 58.5781 43.941 59.4345 36.8562 59.4345Z"
              fill="#F9B046"
            />
            <path
              d="M16.6144 87.272C13.7182 87.272 11.3203 89.6544 11.3203 92.5661V116.063C11.3203 118.959 13.7027 121.357 16.6144 121.357H55.386C58.2822 121.357 60.6802 118.974 60.6802 116.063V92.5661C60.6802 89.6699 58.2978 87.272 55.386 87.272H16.6144ZM17.0037 90.8066H55.0279L37.0902 106.814C36.4051 107.421 35.6421 107.421 34.957 106.814L17.0037 90.8066ZM14.8549 93.6094L26.938 104.385L14.8549 115.985V93.6094ZM57.1456 93.6094V115.969L45.1092 104.369L57.1456 93.6094ZM42.4622 106.736L53.9691 117.822H18.0314L29.585 106.751L32.6213 109.445C34.5521 111.158 37.5262 111.158 39.457 109.445L42.4622 106.736Z"
              fill="#F9B046"
            />
          </svg>

          <h1>Entregamos</h1>
          <h2>We deliver</h2>

          <h4>
            <strong>
              Te presentamos a nuestros socios artistas que prepararán el regalo
              perfecto
            </strong>
          </h4>
          <h4>Coordinamos el recojo del mismo para luego entregarlo.</h4>

          <button onClick={onToggle} className="btn">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8204 25.8889C20.6675 25.8889 26.2182 20.3382 26.2182 13.4911C26.2182 6.64401 20.6675 1.09335 13.8204 1.09335C6.97336 1.09335 1.42269 6.64401 1.42269 13.4911C1.42269 20.3382 6.97336 25.8889 13.8204 25.8889ZM13.8204 26.9822C21.2714 26.9822 27.3115 20.942 27.3115 13.4911C27.3115 6.04017 21.2714 0 13.8204 0C6.36952 0 0.329346 6.04017 0.329346 13.4911C0.329346 20.942 6.36952 26.9822 13.8204 26.9822Z"
                fill="#7B6D51"
              />
              <rect
                x="7.62476"
                y="12.2896"
                width="13.1202"
                height="2.18669"
                fill="#7B6D51"
              />
            </svg>
          </button>
        </div>
        <div className={`${styles.cardslider_item} ${styles.danger}`}>
          <svg
            width="71"
            height="122"
            viewBox="0 0 71 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.5 86.1176H33.3445C32.7804 86.1176 32.2451 85.8428 31.9269 85.3654L3.74674 44.484C3.70334 44.4117 3.65994 44.3393 3.61654 44.267C1.21516 40.0284 0 35.4716 0 30.7267C0 13.7868 15.9273 0.000488281 35.5 0.000488281C55.0727 0.000488281 71 13.7868 71 30.7267C71 35.4716 69.7848 40.0284 67.369 44.267C67.3256 44.3393 67.2967 44.4117 67.2388 44.484L39.0731 85.3654C38.7549 85.8283 38.2196 86.1032 37.6555 86.1176H35.5ZM34.2414 82.6747H35.5H36.7441L64.3311 42.6178C66.4576 38.8856 67.5426 34.8929 67.5426 30.7267C67.5426 15.6818 53.1632 3.44344 35.4855 3.44344C17.8079 3.44344 3.44295 15.6818 3.44295 30.7267C3.44295 34.8929 4.52791 38.8856 6.65444 42.6178L34.2414 82.6747Z"
              fill="#F46262"
            />
            <path
              d="M37.0915 86.1172H33.88C33.0843 86.1172 32.3899 85.5674 32.2019 84.8007L17.2728 22.9289C17.2583 22.871 17.2439 22.8276 17.2439 22.7698C16.9401 21.4244 16.7954 20.0501 16.7954 18.6903C16.7954 8.39038 25.1858 0 35.5002 0C45.8146 0 54.2049 8.39038 54.2049 18.7048C54.2049 20.0646 54.0458 21.4389 53.7565 22.7842C53.742 22.8421 53.742 22.8855 53.7276 22.9434L38.7695 84.8007C38.5815 85.5674 37.8871 86.1172 37.0915 86.1172ZM35.2543 82.6742H35.7461L50.3425 22.2634C50.3425 22.2201 50.3569 22.1911 50.3714 22.1477C50.6318 21.0049 50.762 19.8476 50.762 18.7048C50.762 10.2999 43.9195 3.45742 35.5146 3.45742C27.1098 3.45742 20.2384 10.2855 20.2384 18.7048C20.2384 19.8476 20.3686 21.0049 20.6289 22.1477C20.6434 22.1911 20.6434 22.2201 20.6579 22.2634L35.2543 82.6742Z"
              fill="#F46262"
            />
            <path
              d="M36.3393 58.6023C22.799 58.6023 12.5714 55.4342 11.9349 55.2316C11.0235 54.9423 10.5316 53.9731 10.8065 53.0762C11.0958 52.1648 12.0651 51.673 12.962 51.9478C13.1934 52.0201 35.9343 59.0362 57.9952 51.9478C58.8921 51.6585 59.8758 52.1503 60.1651 53.0617C60.4544 53.9731 59.9626 54.9423 59.0512 55.2316C51.1961 57.7488 43.3265 58.6023 36.3393 58.6023Z"
              fill="#F46262"
            />
            <path
              d="M54.6678 87.0719C49.6914 82.11 41.6193 82.11 36.6429 87.0719L35.4856 88.2292L34.3283 87.0719C29.3664 82.0955 21.2799 82.0955 16.3035 87.0719C11.4429 91.9325 11.3995 99.6574 16.2312 105.024C20.6289 109.914 33.6195 120.489 34.1692 120.937C34.5453 121.241 34.9938 121.386 35.4422 121.386C35.4567 121.386 35.4712 121.386 35.4856 121.386C35.9486 121.4 36.4115 121.255 36.8021 120.937C37.3518 120.489 50.3424 109.928 54.7401 105.024C59.5718 99.643 59.5429 91.9325 54.6678 87.0719ZM51.7456 102.319C48.3171 106.138 38.8852 113.993 35.5001 116.785C32.115 113.993 22.6831 106.138 19.2546 102.319C15.884 98.5725 15.855 93.2489 19.1823 89.9217C20.8748 88.2292 23.1171 87.3757 25.3449 87.3757C27.5726 87.3757 29.8004 88.2292 31.5074 89.9217L34.039 92.4533C34.3428 92.7571 34.7189 92.9307 35.124 93.003C35.775 93.1477 36.4693 92.9596 36.9757 92.4533L39.5072 89.9217C42.9068 86.5222 48.4329 86.5222 51.818 89.9217C55.1452 93.2489 55.1162 98.5725 51.7456 102.319Z"
              fill="#F46262"
            />
            <path
              d="M36.9018 89.5134C38.7782 88.7402 39.6724 86.5924 38.8993 84.7161C38.1261 82.8398 35.9783 81.9455 34.102 82.7187C32.2256 83.4919 31.3314 85.6397 32.1045 87.516C32.8777 89.3923 35.0255 90.2866 36.9018 89.5134Z"
              fill="#F46262"
            />
          </svg>

          <h1>Conectamos</h1>
          <h2>We connect</h2>

          <h4>
            <strong>
              Preparamos la conexión en línea contigo desde el lugar elegido,
            </strong>{' '}
            somos cómplices para planificar la experiencia.
          </h4>
          <h4>
            contamos con tu apoyo para dar el empujón final para que la sorpresa
            sea memorable e inolvidable.
          </h4>

          <button onClick={onToggle} className="btn">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8204 25.8889C20.6675 25.8889 26.2182 20.3382 26.2182 13.4911C26.2182 6.64401 20.6675 1.09335 13.8204 1.09335C6.97336 1.09335 1.42269 6.64401 1.42269 13.4911C1.42269 20.3382 6.97336 25.8889 13.8204 25.8889ZM13.8204 26.9822C21.2714 26.9822 27.3115 20.942 27.3115 13.4911C27.3115 6.04017 21.2714 0 13.8204 0C6.36952 0 0.329346 6.04017 0.329346 13.4911C0.329346 20.942 6.36952 26.9822 13.8204 26.9822Z"
                fill="#7B6D51"
              />
              <rect
                x="7.62476"
                y="12.2896"
                width="13.1202"
                height="2.18669"
                fill="#7B6D51"
              />
            </svg>
          </button>
        </div>
        <div className={`${styles.cardslider_item} ${styles.cyan}`}>
          <svg
            width="71"
            height="122"
            viewBox="0 0 71 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.7142 88.0614H33.5623C33.0022 88.0614 32.4715 87.7762 32.1473 87.3108L4.15749 45.912C4.11327 45.8369 4.06906 45.7619 4.02484 45.6868C1.63708 41.4089 0.428467 36.8006 0.428467 31.9823C0.428467 14.8403 16.2584 0.880615 35.7142 0.880615C55.17 0.880615 70.9999 14.8403 70.9999 31.9823C70.9999 36.7856 69.7913 41.3938 67.4035 45.6868C67.374 45.7619 67.3298 45.8369 67.2856 45.897L39.2811 87.2958C38.9568 87.7611 38.4409 88.0463 37.8661 88.0463L35.7142 88.0614ZM34.4613 84.5789H35.7142H36.9523L64.382 44.0357C66.4897 40.2681 67.5657 36.2152 67.5657 31.9973C67.5657 16.7617 53.2686 4.37805 35.6994 4.37805C18.1303 4.37805 3.84797 16.7617 3.84797 31.9823C3.84797 36.2002 4.92393 40.238 7.03164 44.0207L34.4613 84.5789Z"
              fill="#52D5D8"
            />
            <path
              d="M37.3062 88.0611H34.1225C33.3266 88.0611 32.6486 87.5057 32.4569 86.7252L17.5998 24.1015C17.5851 24.0565 17.5703 23.9965 17.5703 23.9364C17.2755 22.5705 17.1134 21.1895 17.1134 19.8086C17.1281 9.37629 25.4705 0.880371 35.7143 0.880371C45.9581 0.880371 54.3005 9.37629 54.3005 19.8086C54.3005 21.1895 54.1531 22.5705 53.8436 23.9364C53.8288 23.9815 53.8288 24.0415 53.8141 24.0865L38.9717 86.7252C38.7801 87.5057 38.1021 88.0611 37.3062 88.0611ZM35.4637 84.5787H35.9501L50.4535 23.4261C50.4535 23.381 50.4683 23.351 50.483 23.306C50.7483 22.1502 50.881 20.9794 50.881 19.8236C50.881 11.3126 44.0862 4.37781 35.7143 4.37781C27.3424 4.37781 20.5476 11.2976 20.5476 19.8086C20.5476 20.9644 20.6803 22.1502 20.9456 23.291C20.9603 23.336 20.9603 23.366 20.9751 23.4111L35.4637 84.5787Z"
              fill="#52D5D8"
            />
            <path
              d="M36.5542 60.2013C23.0973 60.2013 12.9272 56.9891 12.2934 56.794C11.3943 56.5088 10.8932 55.5181 11.1732 54.6024C11.4533 53.6868 12.4261 53.1765 13.3252 53.4617C13.5463 53.5367 36.1562 60.6367 58.0882 53.4617C58.9873 53.1614 59.9454 53.6718 60.2401 54.5874C60.5349 55.5031 60.0338 56.4938 59.1347 56.779C51.3082 59.3458 43.4964 60.2013 36.5542 60.2013Z"
              fill="#52D5D8"
            />
            <path
              d="M64.8832 89.9524C64.3526 89.6521 63.704 89.6822 63.1882 90.0124L52.4875 97.0223V93.1196C52.4875 90.3276 50.2618 88.061 47.5204 88.061H21.0045C18.263 88.061 16.0374 90.3276 16.0374 93.1196V116.746C16.0374 119.538 18.263 121.805 21.0045 121.805H47.5204C50.2618 121.805 52.4875 119.538 52.4875 116.746V112.843L63.1882 119.853C63.9546 120.364 64.9863 120.123 65.4727 119.343C65.6496 119.073 65.738 118.757 65.738 118.427V91.4384C65.7528 90.823 65.4138 90.2526 64.8832 89.9524ZM49.1859 116.746C49.1859 117.677 48.4489 118.427 47.5351 118.427H21.0045C20.0906 118.427 19.3537 117.677 19.3537 116.746V93.1196C19.3537 92.1889 20.0906 91.4384 21.0045 91.4384H47.5204C48.4342 91.4384 49.1711 92.1889 49.1711 93.1196V116.746H49.1859ZM62.4365 115.35L52.4875 108.836V101.03L62.4365 94.5155V115.35Z"
              fill="#52D5D8"
            />
          </svg>

          <h1>Grabamos</h1>
          <h2>We tape & edit</h2>

          <h4>
            <strong>
              Preparamos la conexión en línea contigo desde el lugar elegido,
            </strong>{' '}
            contamos con tu apoyo para dar el empujón final para que la sorpresa
            sea memorable e inolvidable.
          </h4>

          <button onClick={onToggle} className="btn">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8204 25.8889C20.6675 25.8889 26.2182 20.3382 26.2182 13.4911C26.2182 6.64401 20.6675 1.09335 13.8204 1.09335C6.97336 1.09335 1.42269 6.64401 1.42269 13.4911C1.42269 20.3382 6.97336 25.8889 13.8204 25.8889ZM13.8204 26.9822C21.2714 26.9822 27.3115 20.942 27.3115 13.4911C27.3115 6.04017 21.2714 0 13.8204 0C6.36952 0 0.329346 6.04017 0.329346 13.4911C0.329346 20.942 6.36952 26.9822 13.8204 26.9822Z"
                fill="#7B6D51"
              />
              <rect
                x="7.62476"
                y="12.2896"
                width="13.1202"
                height="2.18669"
                fill="#7B6D51"
              />
            </svg>
          </button>
        </div>
      </Slider>
    </div>
  )
}

export default CardSlider
