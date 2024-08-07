import React from "react";

export function HireCards({
  digit,
  h1,
  p1,
  p2,
  p3,
  p4,
  p5,
  bgColor,
  titleColor,
  textColor,
  digitColor,
}) {
  return (
    <>
      <div
        className={`p-5 h-96 width-full max-w-[295.28px] flex flex-col justify-evenly ${bgColor}`}
      >
        <div>
          <p className={`text-2xl ${digitColor}`}>{digit}</p>
        </div>
        <div>
          <h1 className={`text-2xl ${titleColor}`}>{h1}</h1>
        </div>
        <div>
          <p className={`text-md ${textColor}`}>{p1}</p>
          <p className={`text-md ${textColor}`}>{p2}</p>
          <p className={`text-md ${textColor}`}>{p3}</p>
          <p className={`text-md ${textColor}`}>{p4}</p>
          <p className={`text-md ${textColor}`}>{p5}</p>
        </div>
      </div>
    </>
  );
}
