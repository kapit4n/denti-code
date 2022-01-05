import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { CreateForm } from '../form'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  speciality: yup.string().required(),
})

export default function Index({ setBreadcrumbs }) {
  const history = useHistory()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const submitIt = async (data) => {
    await axios.post(`${process.env.REACT_APP_API_PATH}/doctors`, data)
    history.push(`/doctors/list`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST', route: "/doctors" },
      { label: 'CREATE' }
    ])
  }, [])

  return (
    <CreateForm handleSubmit={handleSubmit(d => submitIt(d))} register={register} />
  );
};
