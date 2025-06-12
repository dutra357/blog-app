import { PostModel } from "@/models/post/PostModel";

export interface DrizzleRepository {
    findAllPublic(): Promise<PostModel[]>;
    findBySlugPublic(slug: string): Promise<PostModel>;

    //Para área administrativa
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
}