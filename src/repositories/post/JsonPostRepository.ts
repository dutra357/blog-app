import { PostModel } from "@/models/post/PostModel";
import { PostRepository } from "./PostRepository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const ROOT_FILE_POST_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json')

// Padão Repository
// BOOK: Patterns of Enterprise Application Architecture
export class JsonPostRepository implements PostRepository {

    private async readFromDisk() {
        const file = await readFile(ROOT_FILE_POST_PATH, 'utf-8');
        const parsedFile = JSON.parse(file);
        const { posts } = parsedFile;
        return posts;
    }

    async findAll(): Promise<PostModel[]> {
        const posts = await this.readFromDisk();
        return posts;
    }

        async findById(id: string): Promise<PostModel> {
        const posts = await this.findAll();
        const post = posts.find((post) => post.id === id);

        if (!post) {
            throw new Error('Post not found');
        }

        return post;
    }
}