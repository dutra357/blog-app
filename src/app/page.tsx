import { Container } from "@/components/container";
import { PostDestaque } from "@/components/destaque";
import { Header } from "@/components/header";
import { PostList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />

      <PostDestaque />

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className='text-6x1 font-bold text-center py-8'>Meu footer</h1>
      </footer>

    </Container>
  );
}
