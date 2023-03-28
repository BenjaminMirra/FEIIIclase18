import { Button } from "@mui/material";
import React from "react";
import { useForm } from 'react-hook-form'
import Input from "../components/Input/Input";

const Create = () => {
  const {register, handleSubmit, formState : { errors }, control} = useForm();
  const onSubmit = (data : any) => {
    console.log(data);
    //hacer el post de lapi a db




  }

  const showNameErrorMessage = errors['name'] && errors['name'].type === 'required';
  const showEmailErrorMessage = errors['email'] && errors['email'].type === 'required';

  return (
    <main>
      <h1>Cadastro blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          control={control}
          name="name"
          type="text"
          rules={{ required: true }} 
        />
        {showNameErrorMessage && <p>Nombre es obligatorio</p>}

        <Input
          control={control}
          name="email"
          type="text"
          rules={{ required: true }} 
        />
        {showEmailErrorMessage && <p>Email es obligatorio</p>}

        <Button type="submit"
        sx={{bgcolor:"white", width:350}}>Registreishon</Button>
      </form>
    </main>
  );
};

export default Create;