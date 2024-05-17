"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

const Navigation = [
  {
    id: 1,
    name: "Home",
    link: "/",
    active: false,
  },
  { id: 2, name: "About", link: "/about", active: false },
  { id: 3, name: "Industry", link: "/industry", active: false },
  { id: 4, name: "Blog", link: "/blog", active: false },
  { id: 5, name: "School", link: "/school", active: false },
  { id: 6, name: "Research", link: "/research", active: false },
  { id: 7, name: "Training", link: "/training", active: false },
];
export const SideBar = () => {
  const [dotPosition, setDotPosition] = useState<number>(85);

  const navRef = useRef<HTMLDivElement>(null);
  const handleItemClick = (
    event: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      // Use currentTarget instead of target to ensure you get the element to which the event listener is attached
      const itemRect = (
        event.currentTarget as HTMLDivElement
      ).getBoundingClientRect();
      const position = itemRect.top + itemRect.height / 2 - navRect.top;
      const adjusted = position - 43;

      setDotPosition(adjusted);
      console.log(adjusted);
    }
  };
  return (
    <>
      <nav
        ref={navRef}
        className="p-10 flex flex-col gap-4 items-start w-auto fixed"
      >
        <div className="flex relative items-center justify-center">
          <div className="absolute -left-4 -top-0">
            {" "}
            <span
              className="relative flex h-2 w-2 items-center justify-center "
              style={{ top: `${dotPosition}px`, transition: "top 0.5s ease" }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
          </div>
          <div className="text-lg font-semibold mr-10 mb-8 text-nowrap text-[#f54343] ">
            Marc Studio
          </div>
        </div>
        {Navigation.map((item) => (
          <div
            key={item.id}
            onClick={(e) => handleItemClick(e, item.id)}
            className="cursor-pointer"
          >
            <Link href={item.link}>
              <h1 className="text-white">{item.name}</h1>
            </Link>
          </div>
        ))}
      </nav>
      <style jsx>{`
        .dot {
          width: 6px;
          height: 6px;
          background-color: #f54343;
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .dotbg {
          width: 10px;
          height: 10px;
          background-color: #f54343;
          border-radius: 50%;
          transform: translateX(-50%);
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};
