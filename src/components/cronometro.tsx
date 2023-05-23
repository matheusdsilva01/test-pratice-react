"use client";
import React, { useEffect, useState } from "react";

const Cronometro = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [check, setCheck] = useState(false);

  const verifyCheck = () => {
    setCheck(!check);
  };

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setCheck(false);
  };

  useEffect(() => {
    if (!check) {
      return;
    }

    const myInterval = setTimeout(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 59 && seconds === 59) {
        setSeconds(0);
        setMinutes(0);
        setHours(hours + 1);
      }
    }, 1000);

    return () => clearTimeout(myInterval);
  }, [check, minutes, seconds, hours]);

  return (
    <div className="m-auto border-blue-600 border-4 p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Cronômetro</h1>
        <h2 className="text-xl">
          {hours.toString().length === 1 ? "0" + hours : hours}:
          {minutes.toString().length === 1 ? "0" + minutes : minutes}:
          {seconds.toString().length === 1 ? "0" + seconds : seconds}
        </h2>
        <div className="flex gap-5 mt-5">
          <button
            className="py-4 px-6 bg-zinc-600 hover:bg-zinc-700 transition-colors rounded-md"
            onClick={verifyCheck}
          >
            {check ? "Parar" : "Iniciar "}
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

export default Cronometro;
