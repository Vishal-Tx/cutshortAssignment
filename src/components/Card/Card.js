import React, { useState } from "react";
import { Form } from "../Form";
import { ProgressBar } from "../index";

const Card = ({ className, children, hText, pText }) => {
  const classes = "container  w-[700px] mx-auto mt-[100px] " + className;

  const [step, setStep] = useState(0);
  const steps = 4;

  return (
    <div className={classes}>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Eden
      </h2>
      <ProgressBar step={step} setStep={setStep} steps={steps} />
      <Form step={step} setStep={setStep} />

      {children}
    </div>
  );
};

export default Card;
