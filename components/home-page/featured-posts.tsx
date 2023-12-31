import { Post } from '@/types';
import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts