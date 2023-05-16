import axios from 'axios'
import { useState, useEffect } from 'react'
import { useCookies } from "react-cookie"

export default function ({ entity }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [cookies] = useCookies(['token'])

  useEffect(async () => {
    let token = ""
    if (cookies) {
      token = cookies["token"]
    }
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/?token=${token}`)
    setIsLoading(false)
    setData(result.data)
  }, [entity])

  return { data, isLoading }
}
