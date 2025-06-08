import { formatDateTime } from "@/utils/dateTimeFormater";
import { PostHeading } from "../post-heading";


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
            <time
                className='text-slate-600 text-sm/tight'
                dateTime={createdAt}>
                {formatDateTime(createdAt)}
            </time>

            <PostHeading url={postLink} as={postHeading}>
                {title}
            </PostHeading>

            <p>
                {excerpt}
            </p>
        </div>
        
    );
}