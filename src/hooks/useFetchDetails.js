import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ({ entity, id }) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    if (id) {
      const result = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/${id}`)
      await setTimeout(() => {}, 2000)
      setData(result.data)
    }
  
    setIsLoading(false)
  }, [id])

  return { data, isLoading, setData }
}
