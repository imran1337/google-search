import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../../contexts/ResultContextProvider'
import Loading from '../Loading'

const Results = () => {
  const resultContext = useResultContext()

  if (resultContext === undefined) {
    throw new Error(
      'The useResultContext hook must be used within a ResultContextProvider.Provider'
    )
  }

  const { results, isLoading, getResults, searchTerm } = resultContext

  const location = useLocation()

  useEffect(() => {
    if (!searchTerm) return

    if (location.pathname === '/videos') {
      getResults(`/search/q=${searchTerm} videos`)
    } else {
      getResults(`${location.pathname}/q=${searchTerm}&num=100`)
    }
  }, [location.pathname, searchTerm])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.map(({ title, link }, idx) => (
            <div key={idx} className='md:w-2/5 w-full'>
              <a href={link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <div className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </div>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.map(({ image, link: { href, title } }, idx) => (
            <a href={href} className='sm:p-3 p-5' target='_blank' rel='noreferrer'>
              <img src={image?.src} alt={title} loading='lazy' />
              <p className='w-36 break-words text-sm mt-2'>{title}</p>
            </a>
          ))}
        </div>
      )
    case '/news':
      return (
        <div className='sm:px-56 flex flex-wrap justify-between items-center space-y-6'>
          {results?.map(({ id, links, source, title }) => (
            <div key={id} className='md:w-2/5 w-full '>
              <a
                href={links?.[0].href}
                target='_blank'
                rel='noreferrer '
                className='hover:underline '>
                <p className='text-lg dark:text-blue-300 text-blue-700'>{title}</p>
              </a>
              <div className='flex gap-4'>
                <a
                  href={source?.href}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline hover:text-blue-300'>
                  {' '}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      )
    case '/videos':
      return (
        <div className='flex flex-wrap '>
          {results?.map((video, index) => (
            <div key={index} className='p-2'>
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width='355px'
                height='200px'
              />
            </div>
          ))}
        </div>
      )
    default:
      return 'ERROR'
  }
}

export default Results