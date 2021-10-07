import '@fontsource/dm-sans'
import React from 'react'
import { ToastContainer } from 'react-toastify'

// Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

// utils
import AuthState from '@/context/auth/AuthState'
import useDisclosure from '@/hooks/useDisclosure'
import CheckoutState from '@/context/checkout/CheckoutState'

// Styles
import '@/styles/index.scss'

const App = ({ Component, pageProps }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <main>
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
    </main>
  )
}

export default App
