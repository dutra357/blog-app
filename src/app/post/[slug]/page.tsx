import { findBySlugCached } from "@/lib/post-lib/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
    params: { slug: string };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {

    const { slug } = params;
    
    const post = await findBySlugCached(slug).catch((error) => {
        console.error('Error fetching post:', error);
        return null;
    });
    

    if (!post) {
        console.log('Post not found for this slug.');
        notFound();
    }

    return (
        <div>
            <p>{post.content}</p>
        </div>
    );
}