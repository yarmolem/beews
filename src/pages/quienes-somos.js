import React from 'react'
import Head from 'next/head'

// sections
import Hero from '@/sections/QuienesSomos/Hero'
import Vision from '@/sections/QuienesSomos/Vision'
import Fundador from '@/sections/QuienesSomos/Fundador'
import Compromiso from '@/sections/QuienesSomos/Compromiso'

// data
import { CEO, CMO } from '@/data/fundadores'

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Beews | ¿Quiénes somos?</title>
      </Head>

      <Hero />
      <Vision />
      <Compromiso />
      <Fundador {...CEO} />
      <Fundador {...CMO} />
    </div>
  )
}

export default QuienesSomos
