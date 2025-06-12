import { DrizzlePostRepository } from "./drizzle/DrizzlePostRepository";
import { DrizzleRepository } from "./drizzle/DrizzleRepository";
import { JsonPostRepository } from "./json-mock/JsonPostRepository";
import { PostRepository } from "./json-mock/PostRepository";

export const postRepository: PostRepository = new JsonPostRepository();
export const postRepositoryWDrizzle: DrizzleRepository = new DrizzlePostRepository();