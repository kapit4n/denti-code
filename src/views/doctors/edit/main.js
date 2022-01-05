import React, { useEffect } from 'react'
import { EditForm } from '../form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  speciality: yup.string().required(),
})

export default function ({ data, id }) {
  const history = useHistory()

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    reset(data)
  }, [data])

  const submitIt = async (data) => {
    await axios.put(`${process.env.REACT_APP_API_PATH}/doctors/${id}`, data)
    history.push(`/doctors/list`)
  }

  const onCancel = () => {
    history.push(`/doctors`)
  }

  return (
    <EditForm handleSubmit={handleSubmit(d => submitIt(d))} register={register} control={control} cancel={onCancel} />
  )
}