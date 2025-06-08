import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../post-cover-img";
import { PostSummary } from "../post-summary";


export async function PostList() {
    const posts = await postRepository.findAll();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map(post => {

                const postLink = `/post/${post.slug}`;
                return (
                    <div className='group flex flex-col gap-4' key={post.id}>
                        <PostCoverImage
                            linkProps={{ href: postLink }}
                            imageProps={{
                                priority: false,
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }} />


                        <PostSummary
                            postLink={postLink}
                            createdAt={post.createdAt}
                            title={post.title}
                            excerpt={post.excerpt}
                            postHeading='h3' />
                    </div>
                )
            })}

        </div>
    );
}