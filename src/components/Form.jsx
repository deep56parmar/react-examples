import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

export const Form = () => {

    const [formData, setFormData] = React.useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setFormData(data);
    }

    useEffect(() => {
        console.log(formData);
    } , [formData]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example", { required: true})} />
      {errors.example && <span>This field is required</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
}
