import { of } from 'await-of'
import axios from 'axios'
import { APIsConfig } from './config'

const get = async (url) => {
  if (url.startsWith('/')) {
    url = url.slice(1)
  }
  const [data, error] = await of(
    axios.get(`${APIsConfig.baseUrl}/${url}`, {
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    })
  )

  if (data) {
    console.log(data)
    return data.data
  }

  if (error) {
    throw new Error(error)
  }
}

export { get }
