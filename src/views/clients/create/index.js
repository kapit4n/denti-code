import React from 'react';

import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Main from './main'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export default function Index() {
  const history = useHistory()

  const submitIt = async (data) => {
    await axios.post(`${process.env.REACT_APP_API_PATH}/users`, data)
    history.push(`/clients`)
  }

  return (
    <Main onSubmit={submitIt} />
  );
};
