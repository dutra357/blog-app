import { drizzleDb } from "@/db/drizzle";
import { PostModel } from "@/models/post/PostModel";
import { DrizzleRepository } from "./DrizzleRepository";


// Com Drizzle ORM
export class DrizzlePostRepository implements DrizzleRepository {
    async findAllPublic(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, {desc}) => [desc(posts.createdAt)],
            where: (posts, {eq}) => eq(posts.published, true)
        });

        return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
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