import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Form4 = ({ formData, setStep, setFormData }) => {
  const hText = `Congratulations, ${formData.dName}!`;
  const pText = "You have completed onboarding, you can start using the Eden!";

  const handleCLick = () => {
    toast.success(`Congrats, ${formData.dName}!`);
  };
  return (
    <div className="mt-8 w-[450px] mx-auto">
      <AiFillCheckCircle size={64} color={"#664de5"} className="mx-auto" />
      <FormHeader hText={hText} pText={pText} />
      <button
        className="border w-full rounded-lg p-2 my-6 text-slate-200 bg-[#664de5] hover:bg-[rgba(102,77,229,0.9)]"
        onClick={handleCLick}
      >
        Launch Eden
      </button>
    </div>
  );
};

export default Form4;
