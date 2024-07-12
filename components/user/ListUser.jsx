import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RoleCard } from "../../components/RoleCard"
import ListUserTable from "../../components/user/ListUserTable"
import { RiEqualizerFill } from "react-icons/ri";
import Link from 'next/link';

const ListUser = () => {
  return (
    <>
     <div className='flex flex-col gap-[38px] w-[90%]'>
        <div>
            <h1 className='text-[#317ACC] text-[24px] font-k2d'>Users</h1>
        </div>
        <div className='flex gap-[34.4px]'>
          <div className="w-[60%] flex items-center border bg-white rounded-full">
            <CiSearch className="text-[26px] w-[10%]"/>
            <input type="text" placeholder="Search" className="h-[45px] w-[85%]"/>
          </div>
          <select className='w-[90px] text-[#7C7D7F] bg-transparent p-2 cursor-pointer'>
            <option>Sort by</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="Techinical Leader">Techinical Leader</option>
          </select>
          <Link href={"#"} className='flex items-center'>
           <RiEqualizerFill className='w-[19.18px] h-[19px] text-[#404040]'/> 
          </Link>
        </div>
        <div className='flex gap-[16.5px]'>
         <RoleCard role="Technical Leader" number="45"/>
         <RoleCard role="Admin" number="2"/>
         <RoleCard role="Users" number="23"/>
        </div>
        <div>
          <ListUserTable/>
        </div>
     </div>
    </>
  )
}

export default ListUser