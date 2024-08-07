import React from "react";

export const ButtonOne = ({ text }) => {
  return (
    <>
      <div>
        <button className="bg-btn1 px-4 py-2 font rounded text-base text-white">
          {text}
        </button>
      </div>
    </>
  );
};

export const ButtonTwo = ({ text }) => {
  return (
    <div>
      <button className="px-8 py-3 rounded">{text}</button>
    </div>
  );
};

export const CarrersButton = ({ text }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded bg-blue-500 px-6">
        <select
          name=""
          className="px-3 py-3 rounded bg-blue-500 flex justify-center items-center gap-2"
        >
          <option value="">{text}</option>
          <option value="">Software Enginner</option>
          <option value="">Software Engineer</option>
        </select>
      </div>
    </div>
  );
};

export const CourseButton = ({ text }) => {
  return (
    <>
      <div>
        <button className="bg-btn1 max-h-[36px] max-w-[99px] font rounded text-[16px] text-white">
          {text}
        </button>
      </div>
    </>
  );
};
