import React from "react";
import FormHeader from "../FormHeader/FormHeader";

const Form2 = ({ formData, setStep, setFormData }) => {
  const heading = "Let's set up a home for all your work";
  const text = "You can always create workspace later";

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
          <label>Workspace Name</label>
          <input
            className="border block w-full my-3 py-3 px-4 rounded-lg border-slate-200 outline-none"
            type="text"
            id="wName"
            name="wName"
            placeholder="Eden"
            required
            value={formData.wName}
            onChange={handleChange}
          />
          <label>
            Workspace URL<span className="text-slate-400"> (optional)</span>
          </label>
          <div className="flex">
            <span className="border my-3 py-3 px-4 rounded-l-lg  bg-slate-100 text-slate-400">
              www.eden.com/
            </span>
            <input
              className="border my-3 py-3 px-4 rounded-r-lg  w-full border-slate-200 outline-none"
              type="text"
              id="wURL"
              name="wURL"
              placeholder="Example"
              value={formData.wURL}
              onChange={handleChange}
            />
          </div>

          <button className="border w-full rounded-lg p-2 my-6 text-slate-200 bg-[#664de5] hover:bg-[rgba(102,77,229,0.9)]">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Form2;
