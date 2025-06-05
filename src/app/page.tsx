import { Container } from "@/components/container";
import { PostList } from "@/components/post-list/PostList";
import { SpinLoader } from "@/components/spin-loader/SpinLoader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>

      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>Blog App</h1>
      </header>

      <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa quisquam ut ipsam asperiores sit rerum dolor possimus vero,
        dignissimos, et fugiat ex maiores officia, dolores consequuntur
        architecto repudiandae. Corporis, blanditiis.
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h2 className='text-6x1 font-bold text-center py-8'>Meu footer</h2>
      </footer>

    </Container>
  );
}
