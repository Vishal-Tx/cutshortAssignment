import React from "react";
import "./Form1.css";
import FormHeader from "../FormHeader/FormHeader";

const Form = ({ formData, setStep, setFormData }) => {
  const heading = "Welcome! First things first...";
  const text = "You can always change later.";

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
          <label>Full Name</label>
          <input
            className="border block w-full my-3 py-3 px-4 rounded-lg border-slate-200 outline-none"
            type="text"
            id="fName"
            name="fName"
            placeholder="Steve Jobs"
            required
            value={formData.fName}
            onChange={handleChange}
          />
          <label>Display Name</label>
          <input
            className="border block w-full my-3 py-3 px-4 rounded-lg border-slate-200 outline-none"
            type="text"
            id="dName"
            name="dName"
            placeholder="Steve"
            value={formData.dName}
            required
            onChange={handleChange}
          />

          <button className="border w-full rounded-lg p-2 my-6 text-slate-200 bg-[#664de5] hover:bg-[rgba(102,77,229,0.9)]">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
