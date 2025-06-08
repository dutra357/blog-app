import { PostCoverImage } from "../post-cover-img";
import { PostHeading } from "../post-heading";
import { PostSummary } from "../post-summary";

export function PostDestaque() {
    const slug = 'meu-post-link';
    const postLink = slug;
    return (

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

            <PostCoverImage
                linkProps={{ href: postLink }}
                imageProps={{
                    priority: true,
                    src: '/images/image.png',
                    alt: 'Título do post',
                    width: 1200,
                    height: 720
                }} />

                <PostSummary
                postLink={postLink}
                postHeading='h3'
                createdAt='2025-04-21'
                excerpt='O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
                title='Rotina matinal de pessoas altamente eficazes' />

        </section>
    );
}