import React from 'react';

import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Main from './main'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export default function Index({ setBreadcrumbs }) {
  const history = useHistory()

  const submitIt = async (data) => {
    await axios.post(`${process.env.REACT_APP_API_PATH}/patients`, data)
    history.push(`/patients`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST', route: "/patients" },
      { label: 'CREATE' }
    ])
  }, [])

  return (
    <Main onSubmit={submitIt} />
  );
};
