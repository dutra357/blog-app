import { DrizzlePostRepository } from "./drizzlePostRepository";
import { DrizzleRepository } from "./DrizzleRepository";
import { JsonPostRepository } from "./JsonPostRepository";
import { PostRepository } from "./PostRepository";

export const postRepository: PostRepository = new JsonPostRepository();
export const postRepositoryWDrizzle: DrizzleRepository = new DrizzlePostRepository();