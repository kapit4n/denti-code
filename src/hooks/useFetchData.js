import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ({ entity }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}`)
    setIsLoading(false)
    setData(result.data)
  }, [entity])

  return { data, isLoading }
}
