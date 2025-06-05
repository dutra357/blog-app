import { postRepository } from "@/repositories/post";


export async function PostList() {
    const posts = await postRepository.findAll();

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.id}</h3>
                    </div>
                )
            })}
        </div>
    );
}