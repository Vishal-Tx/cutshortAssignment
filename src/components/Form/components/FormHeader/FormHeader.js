import React from "react";

const FormHeader = ({ hText, pText }) => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center mt-8">{hText}</h2>
      <p className="text-center text-stone-500 font-normal text-base tracking-tight mt-3">
        {pText}
      </p>
    </>
  );
};

export default FormHeader;
