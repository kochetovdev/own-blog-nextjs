import FeaturesPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Inter } from "next/font/google";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

const DUMMY_POSTS = [
  {
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-11-21",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-11-21",
    slug: "2getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-11-21",
    slug: "3getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-11-21",
    slug: "4getting-started-with-nextjs",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturesPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
