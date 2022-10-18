import React, { useState } from "react";
import { Form1, Form2, Form3, Form4 } from "./index";

const Form = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    fName: "",
    dName: "",
    wName: "",
    wURL: "",
    uType: "",
  });

  const formProps = {
    formData,
    setFormData,
    setStep,
  };
  const getForm = () => {
    if (step === 0) return <Form1 {...formProps} />;
    if (step === 1) return <Form2 {...formProps} />;
    if (step === 2) return <Form3 {...formProps} />;
    if (step === 3) return <Form4 {...formProps} />;
    return <Form1 />;
  };

  return <>{getForm()}</>;
};

export default Form;
