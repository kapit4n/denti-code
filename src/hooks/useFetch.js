import { useState, useEffect } from "react";
import axios from 'axios'

export default function ({ entity }) {
  console.log(entity)
  console.log(entity)
  console.log(entity)
  console.log(entity)
  const [data, setData] = useState([])

  useEffect(async () => {
    (async function () {
        const list = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/`)
        setData(list.data)
      })();
  }, [entity])

  return { data }
}
