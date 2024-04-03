import { StaticImageData } from "next/image";

export interface BlogContent {
  description: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  description: string;
  content: BlogContent[];
  image: StaticImageData;
}