"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BlogPost } from "@/app/utils/types"; // Adjust the import path as necessary
import { Blog } from "@/app/data/Blog"; // Adjust the import path as necessary
import Image from "next/image";

// A function to find the post by slug in the client-side scenario
const findPostBySlug = (
  slug: string,
  posts: BlogPost[]
): BlogPost | undefined => {
  return posts.find((post) => post.slug === slug);
};

export default function PostPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [post, setPost] = useState<BlogPost | undefined>();

  useEffect(() => {
    // Extracting the slug from the pathname
    const slug = pathname.split("/").pop();
    if (slug) {
      setPost(findPostBySlug(slug, Blog));
    }
  }, [pathname]);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="pt-10">
      <article>
        <div>
            <button onClick={() => router.push("/blog")}>
          <h1>{"<--"}</h1>
        </button>
        <h1 className="pt-11 pb-2 font-semibold text-2xl">{post.title}</h1>
        </div>
        <p className="pb-8 text-[#cfcfcf]">{post.date}</p>
        <div className="relative pb-8 w-full h-[400px]">
          <Image
            src={post.image.src}
            alt={post.title}
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="pt-8 pb-8 text-[#b8b8b8] text-justify">
          {post.description}
        </div>
        {post.content.map((content, index) => (
          <p className="pb-6 text-[#b8b8b8] text-justify" key={index}>
            {content.description}
          </p>
        ))}
      </article>
    </div>
  );
}
