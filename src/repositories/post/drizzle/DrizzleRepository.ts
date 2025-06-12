import { PostModel } from "@/models/post/PostModel";

export interface DrizzleRepository {
    findAllPublished(): Promise<PostModel[]>;
    findBySlug(slug: string): Promise<PostModel>;

    //Para área administrativa
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
}