import { drizzleDb } from "@/db/drizzle";
import { PostModel } from "@/models/post/PostModel";
import { DrizzleRepository } from "./DrizzleRepository";


// Padão Repository
// BOOK: Patterns of Enterprise Application Architecture
export class JsonPostRepository implements DrizzleRepository {
    async findAllPublic(): Promise<PostModel[]> {
        const query = drizzleDb.select();
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
    }

    async findAll(): Promise<PostModel[]> {
    }

    async findById(id: string): Promise<PostModel> {
    }

}

(async () => {
    const repository = new DrizzleRepository();
    await repository.findAllPublic();

}) ();