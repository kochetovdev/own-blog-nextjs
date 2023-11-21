import AllPosts from '@/components/posts/all-posts'
import React from 'react'

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

const AllPostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default AllPostsPage