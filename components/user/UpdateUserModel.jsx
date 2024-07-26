import Link from "next/link";
import React from "react";

const UpdateUserModel = ({ handleCloseModel }) => {

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="flex w-[50%] flex-col gap-5 rounded-lg bg-white">
          <div className="flex flex-col place-content-center mb-2 py-3 border-b-2">
            <p className="text-[17px] text-[#317ACC] font-semibold mx-4">Update user information</p>
          </div>
          <form className="flex flex-col gap-[15px] px-4">
            <input
              type="text"
              placeholder="User ID *"
              className="border h-[34px] rounded-md pl-3"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name *"
                className="border w-[50%] h-[34px] rounded-md pl-3"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border w-[50%] h-[34px] rounded-md pl-3"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Email ID *"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
              <input
                type="number"
                placeholder="Select Role Type"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Username *"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
              <input
                type="text"
                placeholder="Password *"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
              <input
                type="text"
                placeholder="Confirm Password *"
                className="border w-[33%] h-[34px] rounded-md pl-3"
              />
            </div>
          </form>
          <div className="relative overflow-x-auto shadow-md flex flex-col">
            <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
              <thead className="text-xs h-[60px] text-gray-500 bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Module Permission
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Read
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Write
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                  <td className="px-6 py-4 font-medium whitespace-nowrap ">
                    Super Admin
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                  <td className="px-6 py-4 font-medium whitespace-nowrap ">
                    Admin
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                  <td className="px-6 py-4 font-medium whitespace-nowrap ">
                    Employee
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="relative top-0 p-3 flex justify-end gap-[11px] mx-2.6">
              <span className="bg-[#317ACC] text-[13px] w-[74.92px] h-[34px] rounded-md flex justify-center items-center text-white">
                Update
              </span>
              <span className="bg-[#FF6B57] text-[13px] w-[74.92px] h-[34px] rounded-md flex justify-center items-center hover:bg-white hover:text-[#FF6B57] text-white cursor-pointer" onClick={handleCloseModel}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default UpdateUserModel;
