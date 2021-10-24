import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'

const Navbar = ({ theme }) => {
  const [darkTheme, setDarkTheme] = theme

  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700'>
      <div className='flex justify-between space-x-5 w-screen'>
        <Link to='/home'>
          <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
            Google 😎
          </p>
        </Link>
        <button
          type='button'
          className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'
          onClick={() => setDarkTheme()}>
          {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
