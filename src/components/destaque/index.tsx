import { PostCoverImage } from "../post-cover-img";
import { PostHeading } from "../post-heading";

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
        
                <div className='flex flex-col gap-2'>
                  <time className='text-slate-600 text-sm/tight' dateTime='2025-04-21'>21 de abril de 2025</time>
        
                  <PostHeading url={postLink} as='h3'>
                    meu link
                  </PostHeading>
        
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium unde quis itaque quos asperiores, libero aspernatur
                    tenetur fugiat voluptate ipsa nemo earum illo
                    consequuntur enim architecto officiis, esse tempore repellat.
                  </p>
                </div>
        
              </section>
    );
}