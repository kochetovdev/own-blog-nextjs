import { Post } from '@/types';
import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

import React from 'react'

const FeaturesPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.latest}>
      <h2>Features Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturesPosts