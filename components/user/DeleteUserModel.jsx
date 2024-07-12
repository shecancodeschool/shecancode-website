import React from "react";
import { IoWarning } from "react-icons/io5";

const DeleteUserModel = ({handleCloseDeleteModel}) => {
  return (
    <>
      <div className="w-[50%] bg-white px-[50px] py-[28px] rounded-xl flex flex-col gap-5 shadow-md">
        <div>
          <h2 className="text-[24px] text-[#FF1F00] font-semibold">Delete User</h2>
          <p className="text-[24px]">
            Are you sure you want to delete <span className="font-semibold">Pacifique</span> ?
          </p>
        </div>
        <div>
          <div className="bg-[#FFE9D9] flex">
            <span className="bg-[#FA703F] h-[117px] w-[10px]"></span>
            <div className="pl-[10px]">
              <div className="flex">
                  <IoWarning className="text-[#771505] flex self-center w-[30px] h-[26.25px]" />
                  <p className="text-[24px] text-[#771505]"> Waring</p>
              </div>
              <p className="text-[20px] text-[#BC4C2E]">
                By Deleteing this account, you won’t be able to access the
                system.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="h-[59px] w-[120.5px] bg-[#8F9BB3] text-white text-[18px] rounded-md hover:text-[#8F9BB3] hover:bg-transparent" onClick={handleCloseDeleteModel}>
            No, Cancel
          </button>
          <button className="h-[59px] w-[120.5px] border-2 border-[#FF1F00] rounded-md text-[#FF1F00] text-[18px] hover:text-white hover:bg-[#FF1F00]">
            Yes, Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModel;
