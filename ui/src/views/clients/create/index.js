import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
})

export default function Index() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(d => console.log(d))} style={{ display: 'block' }}>
      <div>
        <input {...register("name")} placeholder="Name" />
      </div>
      <div>
        <input {...register("age")} placeholder="Age" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
