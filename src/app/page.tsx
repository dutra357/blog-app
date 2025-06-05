import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

        <Link href="#" className='w-full h-full overflow-hidden rounded-xl'>
          
          <Image className='object-cover object-center w-full h-full group-hover:scale-105 transition'
            priority
            src='/images/image.png'
            width={1200}
            height={720}
            alt='Título do post' />

        </Link>

        <div className='flex flex-col gap-2'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-21'>21 de abril de 2025</time>

          <h1 className='text-2xl/tight font-extrabold sm:text-4xl'>
            <Link href='#'>Meu link</Link>
          </h1>

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
