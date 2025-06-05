import { PostList } from "@/components/post-list/PostList";
import { SpinLoader } from "@/components/spin-loader/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  
  return (
    <div>
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>Blog App</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h2 className='text-6x1 font-bold text-center py-8'>Meu footer</h2>
      </footer>
    </div>
  );
}
