import React, { useState } from "react";
import { Form } from "../Form";
import { ProgressBar } from "../index";

const Card = () => {
  const [step, setStep] = useState(0);
  const steps = 4;

  return (
    <div className="container  w-[700px] mx-auto mt-[100px] ">
      <h2 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900">
        <img className="inline mx-auto" src="/images/logo.webp" alt="..." />{" "}
        Eden
      </h2>
      <ProgressBar step={step} setStep={setStep} steps={steps} />
      <Form step={step} setStep={setStep} />
    </div>
  );
};

export default Card;
