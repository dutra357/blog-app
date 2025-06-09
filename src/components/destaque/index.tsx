import { PostCoverImage } from "../post-cover-img";
import { PostSummary } from "../post-summary";
import { findAllPublishedPostsCached } from "@/lib/post-lib/queries";

export async function PostDestaque() {
    const posts = await findAllPublishedPostsCached();
    const firstPost = posts[0];
    const postLink = `/post/${firstPost.slug}`;

    return (

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

            <PostCoverImage
                linkProps={{ href: postLink }}
                imageProps={{
                    priority: true,
                    src: firstPost.coverImageUrl,
                    alt: firstPost.title,
                    width: 1200,
                    height: 720
                }} />

                <PostSummary
                postLink={postLink}
                postHeading='h3'
                createdAt={firstPost.createdAt}
                excerpt={firstPost.excerpt}
                title={firstPost.title} />

        </section>
    );
}