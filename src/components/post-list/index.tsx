import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../post-cover-img";
import { PostHeading } from "../post-heading";


export async function PostList() {
    const posts = await postRepository.findAll();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map(post => {

                return (
                    <div
                        className='group flex flex-col gap-4'
                        key={post.id}>

                        <PostCoverImage
                            linkProps={{ href: `/post/${post.slug}` }}
                            imageProps={{
                                priority: false,
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }} />

                        <div className='flex flex-col gap-2'>
                            <time
                                className='text-slate-600 text-sm/tight'
                                dateTime={post.createdAt}>
                                {post.createdAt}
                            </time>

                            <PostHeading url='#' as='h3'>
                                {post.title}
                            </PostHeading>

                            <p>
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}