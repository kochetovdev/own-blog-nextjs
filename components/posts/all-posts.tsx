import { Post } from "@/types";
import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";

const AllPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostGrid posts={posts}/>
    </section>
  );
};

export default AllPosts;
