import { findBySlugCached } from "@/lib/post-lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeading } from "../post-heading";
import { PostDateTime } from "../post-date-time";
import { SafeMarkDown } from "../safe-markdown";

type SinglePostProps = {
    slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
    const post = await findBySlugCached(slug).catch(() => undefined);
    if (!post) {
        notFound();
    }

    return (
        <article>
            <header className='group flex flex-col gap-1 mb-4'>
                <Image 
                    className='rounded-xl '
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title}
                />

                <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
                
                <p className='text-xs text-gray-500 italic'>{post.author} | <PostDateTime dateTime={post.createdAt} /></p>
            </header>

            <p className='mb-4 italic text-gray-500'>{post.excerpt}</p>

            <section>
                <SafeMarkDown markdown={post.content} />
            </section>


        </article>
    )
}