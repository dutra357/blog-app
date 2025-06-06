import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostCoverImage } from "@/components/post-cover-img";
import { PostHeading } from "@/components/post-heading";
import { PostList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

        <PostCoverImage
          linkProps={{ href: '#' }}
          imageProps={{
            priority: true,
            src: '/images/image.png',
            alt: 'Título do post',
            width: 1200,
            height: 720
          }} />

        <div className='flex flex-col gap-2'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-21'>21 de abril de 2025</time>

          <PostHeading url='#' as='h3'>
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

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className='text-6x1 font-bold text-center py-8'>Meu footer</h1>
      </footer>

    </Container>
  );
}
