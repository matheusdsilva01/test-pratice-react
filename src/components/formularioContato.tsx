"use client";

import React, { FormEvent } from "react";

const FormularioContato = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formDataObject = Object.fromEntries(formData.entries());

    console.log(formDataObject);
    alert("Verique seu console :)");
  };
  return (
    <div className="m-auto border-blue-600 border-4 p-10">
      <h1 className="text-3xl font-bold mb-3">FormularioContato</h1>
      <form onSubmit={submit} className="flex flex-col gap-5 text-black">
        <input type="text" name="nome" />
        <input type="text" name="email" />
        <input type="text" name="mensagem" />
        <button
          type="submit"
          className="py-2 px-6 bg-zinc-600 hover:bg-zinc-700 transition-colors rounded-md self-end text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContato;
