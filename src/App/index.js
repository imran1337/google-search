import React from 'react'
import { Navbar, Footer, Routes } from '../components'
import { useToggle } from '../hooks'

const App = () => {
  const [darkTheme, setDarkTheme] = useToggle()
  return (
    <section className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar theme={[darkTheme, setDarkTheme]} />
        <Routes />
        <Footer />
      </div>
    </section>
  )
}

export default App
