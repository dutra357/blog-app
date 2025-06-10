import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkDown = {
    markdown: string;

}

export function SafeMarkDown({ markdown }: SafeMarkDown) {
    return (
        <div className='prose prose-slate w-full max-w-none
         overflow-hidden prose-a:text-blue-500 prose-a:hover:text-blue-800
          prose-a:transition prose-a:no-underline prose-a:hover:underline 
          prose-img:mx-auto md:prose-lg'>

            <ReactMarkdown
                rehypePlugins={[rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
                components={{
                    table: ({ node, ...props }) => {
                        if (!node?.children) {
                            return '';
                        }

                        return (
                        <div className='overflow-x-auto'>
                            <table className='w-full min-w-[600]' {...props} />
                        </div>
                    )},
                }} >

                {markdown}
                
            </ReactMarkdown>
        </div>

    );
}