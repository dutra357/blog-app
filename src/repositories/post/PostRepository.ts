import { PostModel } from "@/models/post/PostModel";

export interface PostRepository {
    findAllPublished(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
}