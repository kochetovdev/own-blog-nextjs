import FeaturesPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import { Post } from "@/types";
import { Inter } from "next/font/google";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <Fragment>
      <Hero />
      <FeaturesPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
