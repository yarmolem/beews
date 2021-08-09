import '@fontsource/dm-sans'
import React from 'react'

// Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
// import Preloader from '@/components/Preloader'

// hooks
import useDisclosure from 'src/hooks/useDisclosure'

// Styles
import '@/styles/index.scss'
import 'react-slidy/lib/styles.css'

const App = ({ Component, pageProps }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <main>
      {/* <Preloader /> */}
      <Navbar {...{ onOpen }} />
      <Sidebar {...{ isOpen, onClose }} />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default App
