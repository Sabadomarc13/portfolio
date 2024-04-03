import Image from "next/image";
import Department from "@/../public/photos/department.png"

import HomePage from "@/app/component/Home";
import { SideBar } from "@/app/component/SideBar";
export default function Home() {
  return (
    <div className="px-10 py-9 w-full gap-5 flex flex-col">
      <h1 className="font-semibold text-3xl">School</h1>
      <div className="flex gap-4 w-full">
        <div className="w-auto">
          <div className="bg-white w-[200px] h-[250px]"></div>
        </div>
        <div className="w-full gap-2 flex flex-col">
          <p className="text-xl text-semibold">Saint Columban College</p>
          <p className="text-justify indent-8 text-sm">
            Known to be one of the most leading institutions in Pagadian City,
            Saint Columban College, in its pursuit of academic excellence and
            character formation, has taken on the spotlight of producing
            globally-competitive graduates since its founding. As an institution
            since 1957, SCC offers the complete educational package from
            kindergarten to graduate school. Withstanding every challenge and
            adversities for 64 years and counting; SCC became not just an
            institution but a home to many SCCians.
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="w-auto">
          <div className="bg-white w-[200px] h-[250px]">
            <Image
              src={``}
              width={200}
              height={250}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-full gap-2 flex flex-col">
          <p className="text-xl text-semibold">College of Computing Studies</p>
          <p className="text-justify indent-8 text-sm">
            The College of Computing Studies (CCS) is an academic institution
            dedicated to providing comprehensive education and training in
            various aspects of computing and information technology. CCS
            typically offers a wide range of programs at both undergraduate and
            graduate levels, focusing on areas such as computer science,
            information systems, software engineering, data science, and
            cybersecurity, among others.
          </p>
        </div>
      </div>
    </div>
  );
}
