import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Statics from "@/components/Statics";
import Slogan from "@/components/Slogan";

export default function Home() {
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
