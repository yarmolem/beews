import React from 'react'
import Head from 'next/head'

// sections
import CheckOut from '@/sections/CheckOut'

const CheckOutPage = () => {
  return (
    <div>
      <Head>
        <title>Beews | Check out</title>
      </Head>

      <CheckOut />
    </div>
  )
}

export default CheckOutPage
