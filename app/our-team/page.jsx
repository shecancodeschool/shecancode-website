import React from "react";
import TeamCard from "@/components/TeamCard";
import { OurTeamsBanner } from "@/components/Banner";
function page() {
  return (
    <>
      <div className="h-full flex flex-col justify-evenly gap-16">
        <div className="w-full">
          <OurTeamsBanner />
        </div>
        <div className="w-full flex justify-center items-center">
          <h1 className="text-blue-400 text-3xl md:text-[50px] lg:text-[50px] xl:text-[30px] text-[20px] font-regular text-center font">
            Our team
          </h1>
        </div>
        <div className="w-full max-w-[100%] flex flex-wrap justify-evenly mb-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
}

export default page;
