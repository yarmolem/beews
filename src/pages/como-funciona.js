import React from 'react'
import Head from 'next/head'

// sections
import Hero from '@/sections/ComoFunciona/Hero'
import Productos from '@/sections/ComoFunciona/Productos'
import Publicidad from '@/sections/ComoFunciona/Publicidad'
import CaminoCompra from '@/sections/ComoFunciona/CaminoCompra'
import Dudas from '@/sections/ComoFunciona/Dudas'

const ComoFunciona = () => {
  return (
    <div>
      <Head>
        <title>Beews | ¿Como funciona?</title>
      </Head>

      <Hero />
      <CaminoCompra />
      <Publicidad />
      <Productos />
      <Dudas />
    </div>
  )
}

export default ComoFunciona
