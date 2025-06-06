import Link from "next/link";
import Image from "next/image";

type PostCoverImage = {
    imageProps: React.ComponentProps<typeof Image>,
    linkProps: React.ComponentProps<typeof Link>,
}

export function PostCoverImage({ linkProps, imageProps }: PostCoverImage) {
    return (

        <Link {...linkProps}
            className='w-full h-full overflow-hidden rounded-xl'>

            <Image
                {...imageProps}
                className='object-cover object-center w-full h-full group-hover:scale-105 transition'
                alt={imageProps.alt}
            />
        </Link>
    );
}