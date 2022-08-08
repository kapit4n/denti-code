import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ({ entity, id }) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/${id}`)
    setIsLoading(false)
    setData(result.data)
  }, [id])

  return { data, isLoading }
}
