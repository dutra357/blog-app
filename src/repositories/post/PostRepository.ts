import { PostModel } from "@/models/post/PostModel";

export interface PostRepository {
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
}