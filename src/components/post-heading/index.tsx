import Link from "next/link";

type PostheadingProps = {
    children: React.ReactNode,
    url: string,
    as?: 'h1' | 'h2' | 'h3';
}


export function PostHeading({ children, url, as:Tag = 'h2'}: PostheadingProps) {
    const headingClassesMap = {
        h1: 'text-4xl/tight font-bold sm:text-5xl',
        h2: 'text-3xl/tight font-bold sm:text-4xl',
        h3: 'text-2xl/tight font-bold sm:text-3xl',
    }
    
    return (
        <Tag className={headingClassesMap[Tag]}>

            <Link
            className='hover:text-blue-700 transition'
            href={url}
            >{children}</Link>
            
        </Tag>
    );
}