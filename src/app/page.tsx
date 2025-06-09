import { PostDestaque } from "@/components/destaque";
import { PostList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";


export default async function Home() {
  return (

    <>
      <PostDestaque />

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>

  );
}
