import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is require"),
    Email: yup.string().email().required(),
    Age: yup.number().positive().min(18).integer().required(),
    Password: yup.string().min(4).max(20).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null]).required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Full Name...' {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='Email...' {...register("Email")} />
        <p>{errors.Email?.message}</p>
        <input type="number" placeholder='Age...' {...register("Age")} />
        <p>{errors.Age?.message}</p>
        <input type="password" placeholder='Password...' {...register("Password")} />
        <p>{errors.Password?.message}</p>
        <input type="password" placeholder='Confirm Password...' {...register("ConfirmPassword")} />
        <p>{errors.ConfirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
