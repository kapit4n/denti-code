import { useState, useEffect } from "react";
import axios from 'axios'

export default function ({ entity }) {
  const [data, setData] = useState([])

  useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/${entity}/`)
    setData(list.data)
    (async function () {
    })();
  }, [entity])

  return { data }
}
