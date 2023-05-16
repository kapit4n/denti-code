import { useState, useEffect } from "react";
import axios from 'axios'
import { useCookies } from "react-cookie"


export default function ({ entity }) {
  const [data, setData] = useState([])
  const [cookies] = useCookies(['token'])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    refetch()
  }, [entity, cookies])

  const refetch = async () => {
    let token = ""
    if (cookies) {
      token = cookies["token"]
    }
    (async function () {
      const list = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/?token=${token}`)
      setData(list.data)
      setIsLoading(false)
    })();
  }

  return { data, isLoading, setData, refetch }
}
