import React from 'react'
import Head from 'next/head'

// sections
import CheckOut from '@/sections/CheckOut'

const CheckOutPage = () => {
  return (
    <div>
      <Head>
        <title>Beews | Check out</title>
        <script
          defer
          src="https://www.paypal.com/sdk/js?client-id=AR0BfvB5xq6nrRyhNnXE_uFchBZ6WwqYT1BicgfkkYLwxKvvDB5C46o1gKgtmGPhom4LuAUla6mrjk0L"
        />
      </Head>

      <CheckOut />
    </div>
  )
}

export default CheckOutPage
