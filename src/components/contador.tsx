"use client";

import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="m-auto border-blue-600 border-4 p-10 text-center">
      <h1 className="text-3xl font-bold mb-3">Contador</h1>
      <div>
        <h2 className="text-xl">
          Contagem: {count.toString().length === 1 ? "0" + count : count}
        </h2>
        <div className="flex gap-5 mt-5">
          <button
            className="py-4 px-6 bg-zinc-600 hover:bg-zinc-700 transition-colors rounded-md"
            onClick={increment}
          >
            Incrementar
          </button>
          <button
            className="py-4 px-6 bg-zinc-600 hover:bg-zinc-700 transition-colors rounded-md"
            onClick={reset}
          >
            Zerar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
