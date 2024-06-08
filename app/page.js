import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Statics from "@/components/Statics";
import Slogan from "@/components/Slogan";
import React from 'react'

const page = () => {
  return (
    <>
      <div className="">
       <Header />
       <Banner/>
      </div>
      <Slogan/>
      <Statics />
    </>
  );
}

export default page
