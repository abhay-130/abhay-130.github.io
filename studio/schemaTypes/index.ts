import { postType } from './post';
import socialPost from './socialPost';
import project from './project'; // <--- Make sure this import line is active!

export const schemaTypes = [
  project,
  postType,
  socialPost,
];