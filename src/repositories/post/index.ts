import { JsonPostRepository } from "./JsonPostRepository";
import { PostRepository } from "./PostRepository";

export const postRepository: PostRepository = new JsonPostRepository();