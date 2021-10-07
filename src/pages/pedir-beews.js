import React from 'react'
import Head from 'next/head'

import PedirBeews from '@/sections/PedirBeews'

const PedirBeewsPage = () => {
  return (
    <div>
      <Head>
        <title>Beews | Pedir Beews</title>
      </Head>

      <PedirBeews />
    </div>
  )
}

export default PedirBeewsPage
