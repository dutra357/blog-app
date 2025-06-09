import { PostHeading } from "../post-heading";
import { PostDateTime } from "../post-date-time";

type PostSummaryProps = {
    postHeading: 'h1' | 'h2' | 'h3',
    postLink: string,
    createdAt: string,
    title: string,
    excerpt: string
}

export async function PostSummary({ postHeading, postLink, createdAt, title, excerpt }: PostSummaryProps) {

    return (

        <div className='flex flex-col gap-2'>
            <PostDateTime dateTime={createdAt}/>

            <PostHeading url={postLink} as={postHeading}>
                {title}
            </PostHeading>

            <p>
                {excerpt}
            </p>
        </div>
        
    );
}