import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const recentPosts = allPosts
  .filter((post) => post.published)
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .slice(0, 3);
