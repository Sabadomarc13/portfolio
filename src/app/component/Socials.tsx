import Link from "next/link";
import React from "react";
import SocialLinks from "@/app/data/Socials";
const Socials = () => {
  return (
    <nav className="p-10 flex flex-col gap-4 items-start w-auto ">
      <div className="text-sm text-bold mb-2 text-nowrap">Socials</div>
      <div className="flex flex-col gap-2">
        {SocialLinks.map((item) => (
          <div className="opacity-80 hover:opacity-100 text-sm" key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Socials;
