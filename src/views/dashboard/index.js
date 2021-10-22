import axios from 'axios'
import React from 'react'

import Summary from '../../components/summary'


export default function Index() {

  const [summaryData, setSummaryData] = React.useState([])

  React.useEffect(async () => {
    const records = await axios.get(`${process.env.REACT_APP_API_PATH}/records`)
    setSummaryData(records.data.map(r => ({ ...r, title: r.description, description: r.createdAt })))
  }, [])

  return (
    <Summary items={summaryData} />
  )
}