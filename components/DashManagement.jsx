import React from "react";
import Link from "next/link";
import { DashboardCard } from "../components/RoleCard";
import { IoNotifications } from "react-icons/io5";
import { TiUser } from "react-icons/ti";
import { ImFilesEmpty } from "react-icons/im";
import { CgFileAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerFill } from "react-icons/ri";
import ListUserTable from "../components/user/ListUserTable";

const DashManagement = () => {
  return (
    <>
      <div className="flex flex-col gap-[38px] w-[90%] px-5">
        <div className="grid md:flex sm:grid-cols-2 justify-evenly gap-[30px] rounded-md bg-white py-3 h-full">
          <DashboardCard
            icon={<IoNotifications />}
            title="BLOGS"
            stats="12 blogs"
            contCol="bg-[#317ACC]"
            icnCol="bg-[#649AD6] text-white"
            titleCol="text-white font-k2d"
            statsCol="text-white"
          />
          <DashboardCard
            icon={<TiUser />}
            title="USER"
            stats="4  user accounts"
            contCol="bg-[#E4F8EB]"
            icnCol="bg-[#24B15C] text-white"
            titleCol="text-black font-k2d"
            statsCol="text-[#00BC39]"
          />
          <DashboardCard
            icon={<ImFilesEmpty />}
            title="APPLICATION"
            stats="6 Applicants"
            contCol="bg-[#317ACC]"
            icnCol="bg-white text-[#6AACE8]"
            titleCol="text-white font-k2d"
            statsCol="text-white"
          />
          <DashboardCard
            icon={<CgFileAdd />}
            title="Create new"
            stats="Jobs"
            contCol="bg-[#0599D5]"
            icnCol="bg-white text-[#9BD6EE]"
            titleCol="text-white font-k2d"
            statsCol="text-white"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-[#6B6C6E] text-[23px] font-k2d">Overview</h1>
        </div>
        <div className="flex justify-between">
          <div className="w-100% flex items-center border bg-white rounded-2xl md:w-[50%]">
            <CiSearch className="text-[26px] w-[10%]" />
            <input
              type="text"
              placeholder="Search"
              className="h-[45px] w-[85%]"
            />
          </div>
          <div className="flex">
            <select className="text-[#7C7D7F] bg-transparent p-2 cursor-pointer w-[135px]">
              <option>Saved search</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="Techinical Leader">Techinical Leader</option>
            </select>
            <Link href={"#"} className="flex items-center pl-5">
              <RiEqualizerFill className="w-[19.18px] h-[19px] text-[#404040]" />
            </Link>
          </div>
        </div>
        <div className="">
          <ListUserTable />
        </div>
      </div>
    </>
  );
};

export default DashManagement;
