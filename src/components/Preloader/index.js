import React, { useEffect } from 'react'

// Componentes
import Spinner from '@/components/Spinner'

const Preloader = () => {
  useEffect(() => {
    const onLoad = () => {
      const preloader = document.getElementById('preloader')
      preloader.style.pointerEvents = 'none'
      preloader.style.opacity = 0
      window.removeEventListener('load', onLoad)
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <>
      <div id="preloader">
        <div className="center">
          <Spinner />
          <h1>Beews</h1>
        </div>
      </div>
      <style jsx>
        {`
          #preloader {
            width: 100%;
            z-index: 1400;
            height: 100vh;
            position: fixed;
            background-color: #bb7ce8;

            transition: opacity 1.5s ease-in-out;
          }

          .center {
            height: 100vh;
            display: flex;
            aling-items: center;
            flex-direction: column;
            justify-content: center;
          }

          #preloader h1 {
            color: white;
            font-size: 5rem;
            text-align: center;
            animation: fadeIn 1s linear;
            font-family: Playfair Display, sans-serif;
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  )
}

export default Preloader
