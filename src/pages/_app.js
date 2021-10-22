import '@fontsource/dm-sans'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'

// Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import MessengerButton from '@/components/MessengerButton'

// utils
import client from 'src/apollo'
import AuthState from '@/context/auth/AuthState'
import useDisclosure from '@/hooks/useDisclosure'
import CheckoutState from '@/context/checkout/CheckoutState'

// Styles
import '@/styles/index.scss'

const App = ({ Component, pageProps }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <main>
      <ApolloProvider client={client}>
        <AuthState>
          <CheckoutState>
            {/* <Preloader /> */}
            <Navbar {...{ onOpen }} />
            <Sidebar {...{ isOpen, onClose }} />
            <Component {...pageProps} />
            <Footer />
          </CheckoutState>
        </AuthState>
        <ToastContainer />
      </ApolloProvider>
      <MessengerButton />
    </main>
  )
}

export default App
