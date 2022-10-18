import React from "react";
import FormHeader from "../FormHeader/FormHeader";

const Form3 = ({ formData, setStep, setFormData }) => {
  const heading = "How are you planning to use Eden?";
  const text = "We'll streamline your setup experience accordingly.";

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep((prevStep) => {
      return prevStep + 1;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  return (
    <>
      <FormHeader hText={heading} pText={text} />
      <div className="mx-auto w-[450px] mt-[40px]">
        <form className="" onSubmit={handleSubmit}>
          <input type="radio"></input>

          <button className="border w-full rounded-lg p-2 my-6 text-slate-200 bg-[#664de5]">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Form3;
