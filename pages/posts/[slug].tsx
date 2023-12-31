import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { Post } from "@/types";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { Fragment } from "react";

const PostDetailPage = ({ post }: { post: Post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}/>
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
