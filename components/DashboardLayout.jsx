import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSideNav } from "./DashboardSideNav";
import SideNavProvider from "../Hooks/Context/UseContext"

const DashboardLayout = ({ children }) => {
  return (
    <>
        <div>
          <DashboardSideNav />
        </div>
        <div className="absolute right-2 flex flex-col w-full h-full gap-10 max-w-[80%] bg-[#F9FAFE]">
          <DashboardHeader />
          <div className="relative top-36 flex right-9 justify-end items-end bg-[#F9FAFE] pb-10">
            {children}
          </div>
        </div>
    </>
  );
};

export default DashboardLayout;
