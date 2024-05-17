import Image from "next/image";

import HomePage from "@/app/component/Home";
import { SideBar } from "@/app/component/SideBar";
export default function Home() {
  return (
    <div className="px-10 py-9 w-full">
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-3xl">About</h1>
        <div className="flex gap-5 flex-col">
          <p className="text-justify indent-8">
            I am a Bachelor of Computer Science (BCSC) student at Saint Columban
            College, passionately pursuing a career in the ever-evolving field
            of technology. My specialty lies in front-end development, where I
            enjoy creating visually appealing and user-friendly interfaces.
            Through my academic journey and hands-on projects, I have honed my
            skills in HTML, CSS, JavaScript, and various modern frameworks.
          </p>
          <p className="text-justify indent-8">
            My enthusiasm for front-end development drives me to stay updated
            with the latest trends and best practices in web design and
            development. I thrive on transforming creative ideas into
            interactive and responsive web experiences that enhance user
            engagement and satisfaction.
          </p>
          <p className="text-justify indent-8">
            In addition to my technical expertise, I am a strong advocate for
            continuous learning and personal growth. I am actively involved in
            coding communities and enjoy collaborating with fellow students and
            professionals to solve challenging problems and share knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
