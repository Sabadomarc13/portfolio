import Image from "next/image";
import Placeholder from "@/../public/img1.avif";
import Placeholder2 from "@/../public/img2.avif";
import { Blog } from "@/app/data/Blog"; // Adjust the import path as necessary
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 py-9 w-full">
      <h1 className="font-semibold text-3xl">OJT Blog</h1>
      <div className="grid grid-cols-2 gap-10 pt-10">
        {Blog.map((item) => (
          <Link key={item.title} href={`/blog/${item.slug}`}>
            <div className="border-opacity-40 w-full h-full  overflow-hidden">
              <div className="flex justify-center items-center w-full h-[200px] overflow-clip rounded-lg relative hover:border hover:border-red-500 hover:shadow-lg shadow-red-500/50">
                <Image
                  src={item.image}
                  alt={""}
                  className="object-cover absolute transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100"
                ></Image>
              </div>
              <h1 className="text-sm pb-4 pt-3">{item.date}</h1>
              <h1 className="text-xl text-bold pb-2">{item.title}</h1>

              <p className="line-clamp-2 text-sm text-white opacity-60">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
