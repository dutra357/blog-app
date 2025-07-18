import { drizzleDb } from "@/db/drizzle";
import { PostModel } from "@/models/post/PostModel";
import { DrizzleRepository } from "./DrizzleRepository";


// Padão Repository
// BOOK: Patterns of Enterprise Application Architecture
export class DrizzlePostRepository implements DrizzleRepository {

    async findAllPublished(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, {desc}) => [desc(posts.createdAt)],
            where: (posts, {eq}) => eq(posts.published, true)
        });

        return posts;
    }

    async findBySlug(slug: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, { eq, and }) => 
                and(eq(posts.published, true), eq(posts.slug, slug)),
        });

        if (!post) {
            throw new Error("Post not found");
        }

        return post;
    }

    async findAll(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, {desc}) => [desc(posts.createdAt)]
        });

        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, { eq }) => eq(posts.id, id)
        });

        if (!post) {
            throw new Error("Post not found");
        }

        return post;
    }

}