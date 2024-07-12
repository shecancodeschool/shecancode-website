import Link from "next/link";
import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="w-[90%] flex rounded-lg flex-col gap-5 bg-white">
        <div className="flex flex-col place-content-center mb-2 py-5 border-b-2">
          <p className="text-[17px] font-semibold mx-5">Add users</p>
        </div>
        <form className="flex flex-col gap-[15px] px-5">
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
            <thead className="text-xs text-gray-500 h-[60px] uppercase bg-gray-100">
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
          <div className="relative top-0 p-3 flex justify-end mt-0">
            <Link href={"#"}>
              <span className="bg-[#317ACC] text-[13px] w-[74.92px] h-[34px] rounded-md flex justify-center items-center text-white">
                Add user
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
