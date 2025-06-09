type PostSlugPageProps = {
    params: { slug: string };
}

export default function PostSlugPage({ params }: PostSlugPageProps) {

    const { slug } = params;

    return (
        <h1 className='text-7xl font-bold'>
            Minha rota dinamica: {slug}
        </h1>
    );
}