import { postType } from './post';
import socialPost from './socialPost';
// schemaTypes/index.ts (or schemas/index.js)
import project from './project'

export const schemaTypes = [
  project,
  postType,
  socialPost,
];