import React from 'react'
import Head from 'next/head'

// sections
import Hero from '@/sections/ComoFunciona/Hero'
import Dudas from '@/sections/ComoFunciona/Dudas'
import Productos from '@/sections/ComoFunciona/Productos'
import Publicidad from '@/sections/ComoFunciona/Publicidad'
import CaminoCompra from '@/sections/ComoFunciona/CaminoCompra'

const ComoFunciona = () => {
  return (
    <div>
      <Head>
        <title>Beews | ¿Como funciona?</title>
      </Head>

      <Hero />
      <CaminoCompra />
      <Productos />
      <Dudas />
      <Publicidad />
    </div>
  )
}

export default ComoFunciona
