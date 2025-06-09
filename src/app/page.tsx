import { PostDestaque } from "@/components/destaque";
import { PostList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";


export default async function Home() {
  return (

    <>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16'/>}>

        <PostDestaque />
        <PostList />
        
      </Suspense>
    </>

  );
}
