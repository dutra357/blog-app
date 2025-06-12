import { PostModel } from "@/models/post/PostModel";

export interface PostRepository {
    findAllPublished(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
    findBySlug(slug: string): Promise<PostModel>;
    findAll(): Promise<PostModel[]>;
}