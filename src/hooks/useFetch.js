import { useState, useEffect } from "react";
import axios from 'axios'

export default function ({ entity }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    (async function () {
        const list = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/`)
        setData(list.data)
        setIsLoading(false)
      })();
  }, [entity])

  return { data, isLoading, setData }
}
