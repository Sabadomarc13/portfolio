import Image from "next/image";

import HomePage from "@/app/component/Home";
import { SideBar } from "@/app/component/SideBar";
export default function Home() {
  return (
    <div className="px-10 py-9 w-full gap-5 flex flex-col">
      <h1 className="font-semibold text-3xl">Training and Certificates</h1>
      <div className="flex flex-row gap-4  flex-wrap">
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
        <div className="bg-white w-[323px] h-[200px]"></div>
      </div>  
      
    </div>
  );
}
