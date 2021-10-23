import React from 'react'
import Head from 'next/head'

// Components
import Separador from '@/components/Separador'

// sections
import Hero from '@/sections/Landing/Hero'
import Pricing from '@/sections/Landing/Pricing'
import Comunidad from '@/sections/Landing/Comunidad'
import QueHacemos from '@/sections/Landing/QueHacemos'
import CommonSection from '@/sections/Landing/CommonSection'

// data
import { detalle, unboxing } from '@/data/sections'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Beews</title>
      </Head>

      <Hero />
      <QueHacemos />
      <CommonSection {...unboxing} />
      <CommonSection {...detalle} />
      <Separador />
      <Pricing />
      <Comunidad />
    </div>
  )
}

export default Index
