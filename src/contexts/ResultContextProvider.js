import React, { createContext, useContext, useState } from 'react'
import { get } from '../Apis/helpers'
import { useToggle } from '../hooks/useToggle'

const ResultContext = createContext()

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useToggle()
  const [searchTerm, setSearchTerm] = useState('Islamic state of Afghanistan')

  async function getResults(type) {
    setIsLoading()
    const response = await get(type)

    if (type.includes('/news')) {
      setResults(response.entries)
    } else if (type.includes('/images')) {
      setResults(response.image_results)
    } else {
      setResults(response.results)
    }

    setIsLoading()
  }

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
