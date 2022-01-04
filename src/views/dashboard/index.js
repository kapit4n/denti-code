import axios from 'axios'
import React from 'react'

import Summary from '../../components/summary'

const RECORD_ITEM = 'Record'

export default function Index() {

  const [summaryData, setSummaryData] = React.useState([])

  React.useEffect(async () => {
    const records = await axios.get(`${process.env.REACT_APP_API_PATH}/records`)
    setSummaryData(
      records.data.map(
        r => (
          {
            ...r,
            title: r.description,
            description: r.createdAt,
            type: RECORD_ITEM,
            links: [{
              path: '/patients',
              value: r.ClientFile?.Patient?.id,
              label: r.ClientFile.Patient?.firstName
            }]
          }
        )
      )
    )
  }, [])

  return (
    <Summary items={summaryData} />
  )
}