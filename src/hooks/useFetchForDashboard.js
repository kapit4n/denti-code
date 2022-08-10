import React, { useState } from 'react'
import axios from 'axios'

export default function ({ entityName }) {
  const [data, setData] = useState([])


  React.useEffect(async () => {
    const records = await axios.get(`${process.env.REACT_APP_API_PATH}/${entityName}`)
    setData(
      records.data.map(
        r => (
          {
            ...r,
            title: r.description,
            description: r.createdAt,
            type: entityName,
            /* links: [{
              path: `/${entityName}`,
              value: r.ClientFile?.Patient?.id,
              label: r.ClientFile.Patient?.firstName
            }] */
          }
        )
      )
    )
  }, [entityName])

  return { data }
}