import { PostModel } from "@/models/post/PostModel";
import { PostRepository } from "./PostRepository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const ROOT_FILE_POST_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json')

const SIMULATE_DELAY = 0;

// Padão Repository
// BOOK: Patterns of Enterprise Application Architecture
export class JsonPostRepository implements PostRepository {

    private async delay() {
        await new Promise((resolve) => {
            setTimeout(resolve, SIMULATE_DELAY);
        });
    }

    private async readFromDisk() {
        const file = await readFile(ROOT_FILE_POST_PATH, 'utf-8');
        const parsedFile = JSON.parse(file);
        const { posts } = parsedFile;
        return posts;
    }

    async findAllPublished(): Promise<PostModel[]> {
        //await this.delay();

        const posts = await this.readFromDisk();
        return posts.filter((post: { published: boolean; }) => post.published);
    }

        async findAll(): Promise<PostModel[]> {
        //await this.delay();
        return await this.readFromDisk();
    }

    async findById(id: string): Promise<PostModel> {
        const posts = await this.findAllPublished();
        const post = posts.find((post) => post.id === id);

        if (!post) {
            throw new Error('Post not found for this id.');
        }

        return post;
    }

    async findBySlug(slug: string): Promise<PostModel> {
        const posts = await this.findAllPublished();
        const post = posts.find((post) => post.slug === slug);

        if (!post) {
            throw new Error('Post not found for this slug.');
        }

        return post;
    }
}