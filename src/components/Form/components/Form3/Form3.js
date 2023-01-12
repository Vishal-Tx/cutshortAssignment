import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import { TiUser } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";
const uTypes = {
  SELF: "forMyself",
  TEAM: "forTeam",
};

const Form3 = ({ formData, setStep, setFormData }) => {
  const heading = "How are you planning to use Eden?";
  const text = "We'll streamline your setup experience accordingly.";
  const bClasses =
    "group py-4 px-7 w-[205px] border rounded-lg border-slate-200  hover:border-[#664de5] active:border-[#664de5] cursor-pointer";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.uType) {
      toast.warn("Please select a Value to move forward.");
      return;
    } else {
      setStep((prevStep) => {
        return prevStep + 1;
      });
    }
  };

  const handleClick = (uValue) => {
    console.log(uValue);
    setFormData((prevData) => {
      return {
        ...prevData,
        uType: uValue === prevData.uType ? "" : uValue,
      };
    });
    // setFormData((prevData) => {
    //   return { ...prevData, [name]: value };
    // });
    // setIsActive((current) => !current);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => {
  //     return { ...prevData, [name]: value };
  //   });
  // };
  return (
    <>
      <FormHeader hText={heading} pText={text} />
      <div className="mx-auto w-[450px] mt-[40px]">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex mx-auto justify-between">
            <div
              className={
                formData.uType === uTypes.SELF
                  ? "group py-4 px-7 w-[205px] border rounded-lg border-[#664de5] cursor-pointer"
                  : bClasses
              }
              onClick={() => handleClick(uTypes.SELF)}
            >
              <TiUser
                className={
                  formData.uType === uTypes.SELF
                    ? "my-2 ml-0 text-[#664de5]"
                    : "my-2 ml-0 group-hover:text-[#664de5] "
                }
                size={35}
              />
              <h2 className="text-1xl font-bold ">For Myself</h2>
              <p className="text-sm my-2 text-slate-400 leading-relaxed font-medium">
                Write better. Think more clearly. Stay organized
              </p>
            </div>
            <div
              className={
                formData.uType === uTypes.TEAM
                  ? "group py-4 px-7 w-[205px] border rounded-lg border-[#664de5] cursor-pointer"
                  : bClasses
              }
              onClick={() => handleClick(uTypes.TEAM)}
            >
              <FaUsers
                size={35}
                className={
                  formData.uType === uTypes.TEAM
                    ? "my-2 ml-0 text-[#664de5]"
                    : "my-2 ml-0 group-hover:text-[#664de5] "
                }
              />
              <h2 className="text-1xl font-bold ">With my team</h2>
              <p className="text-sm my-2 text-slate-400 leading-relaxed font-medium">
                Wikis, docs tasks & projects, all in one place.
              </p>
            </div>
          </div>

          <button className="border w-full rounded-lg p-2 my-6 text-slate-200 bg-[#664de5] hover:bg-[rgba(102,77,229,0.9)]">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Form3;
