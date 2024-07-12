'use client'

import Link from 'next/link'
import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateUserModel from "./UpdateUserModel"
import DeleteUserModel from "./DeleteUserModel"
import { useState } from 'react';

const ListUserTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleModalClick = (event) => {
    if (!event.target.closest('.UpdateUserModel')) {
      setShowDeleteModal(false);
    }
  };

  const handleDeleteModalClick = (event) => {
    if (!event.target.closest('.DeleteUserModel')) {
      setShowDeleteModal(false);
    }
  };
  return (
    <>
      <>
      <div className="relative overflow-x-auto shadow-md border rounded-lg flex flex-col">
        <div className="py-3 px-4 mb-3 text-sm font-semibold text-left">List Users</div>
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
            <thead className="text-xs h-[60px] text-[#A1ABC0] bg-[#EFF4FA]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Create Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-6 flex justify-center self-center">
                  Action
                </th>
              </tr>
            </thead>
            {/* end header */}
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                <td className="px-6 py-4 font-medium whitespace-nowrap flex">
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Pacifique</p>
                    <span className='text-[#8F9BB3]'>pacifique@example.com</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                    24 Otc, 2015
                </td>
                <td className="py-4">
                  <p className='h-[26px] w-[70%] flex justify-center items-center text-white bg-[#317ACC] rounded-md'>Super Admin</p>
                </td>
                <td className="px-6 py-4 flex justify-evenly">
                 <AiOutlineEdit className='h-[20px] w-[17.88px] hover:text-[#317ACC]' onClick={() => setShowModal(true)}/>
                 <RiDeleteBinLine className='h-[20px] w-[17.88px] hover:text-[#FF6B57]' onClick={() => setShowDeleteModal(true)}/>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                <td className="px-6 py-4 font-medium whitespace-nowrap flex">
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Pacifique</p>
                    <span className='text-[#8F9BB3]'>pacifique@example.com</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                    24 Otc, 2015
                </td>
                <td className="py-4">
                  <p className='h-[26px] w-[70%] flex justify-center items-center text-white bg-[#317ACC] rounded-md'>User</p>
                </td>
                <td className="px-6 py-4 flex justify-evenly">
                 <AiOutlineEdit className='h-[20px] w-[17.88px] hover:text-[#317ACC]' onClick={() => setShowModal(true)}/>
                 <RiDeleteBinLine className='h-[20px] w-[17.88px] hover:text-[#FF6B57]' onClick={() => setShowDeleteModal(true)}/>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                <td className="px-6 py-4 font-medium whitespace-nowrap flex">
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Pacifique</p>
                    <span className='text-[#8F9BB3]'>pacifique@example.com</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                    24 Otc, 2015
                </td>
                <td className="py-4">
                  <p className='h-[26px] w-[70%] flex justify-center items-center text-white bg-[#317ACC] rounded-md'>Techinical Leader</p>
                </td>
                <td className="px-6 py-4 flex justify-evenly">
                 <AiOutlineEdit className='h-[20px] w-[17.88px] hover:text-[#317ACC]' onClick={() => setShowModal(true)}/>
                 <RiDeleteBinLine className='h-[20px] w-[17.88px] hover:text-[#FF6B57]' onClick={() => setShowDeleteModal(true)}/>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-white text-black even:bg-white border-b-2 dark:border-gray-200">
                <td className="px-6 py-4 font-medium whitespace-nowrap flex">
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Pacifique</p>
                    <span className='text-[#8F9BB3]'>pacifique@example.com</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                    24 Otc, 2015
                </td>
                <td className="py-4">
                  <p className='h-[26px] w-[70%] flex justify-center items-center text-white bg-[#317ACC] rounded-md'>Super Admin</p>
                </td>
                <td className="px-6 py-4 flex justify-evenly">
                 <AiOutlineEdit className='h-[20px] w-[17.88px] hover:text-[#317ACC]' onClick={() => setShowModal(true)}/>
                 <RiDeleteBinLine className='h-[20px] w-[17.88px] hover:text-[#FF6B57]' onClick={() => setShowDeleteModal(true)}/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={`fixed top-0 right-0 left-0 z-50 bg-transparent bg-black/70 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  ${showModal ? '' : 'hidden'}`}>
            <UpdateUserModel handleCloseModel={handleModalClick}/>
          </div>
          <div className={`fixed top-0 right-0 left-0 z-50 bg-transparent bg-black/70 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  ${showDeleteModal ? '' : 'hidden'}`}>
            <DeleteUserModel handleCloseDeleteModel={handleDeleteModalClick}/>
          </div>
          <div className="relative top-0 p-3 flex justify-end gap-[11px] mx-2.6">
            {/* Pagination */}
          </div>
        </div>
      </>
    </>
  )
}

export default ListUserTable