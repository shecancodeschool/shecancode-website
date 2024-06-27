import React from "react";
import TeamCard from "@/components/TeamCard";
import { OurTeamsBanner } from "@/components/Banner";

function Page() {
  const peopleProps = [
    { name: "Pacifique Ishimwe", title: "Software Engineer" },
    { name: "Hirwa J eric", title: "Software Engineer" },
    { name: "Uwase Lilian", title: "Operation Coordinator" },
    { name: "Niyonkuru Esther", title: "Software Engineer" },
    { name: "Ntirushwa Brice Kelly", title: "Software Engineer" },
    { name: "Impuhwe Stella", title: "Software Engineer" },
    { name: "Muhumuza Jean Pierre", title: "Software Engineer" },
    { name: "Josiane Tuyisenge", title: "Finance Officer & HR" },
  ];

  return (
    <>
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        <div className="w-full">
          <OurTeamsBanner />
        </div>
        <div className=" w-full flex justify-center items-center">
          <h1 className="text-blue-400 text-6xl md:text-[50px] lg:text-[50px] xl:text-[60px] text-[20px] font-regular text-center">
            Our team
          </h1>
        </div>
        <div className=" max-w-[86rem] mx-auto flex justify-center items-center w-full">
        <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mb-10">
            {peopleProps.map((person, index) => (
              <TeamCard key={index} name={person.name} title={person.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
