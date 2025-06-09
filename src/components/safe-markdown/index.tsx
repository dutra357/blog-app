import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkDown = {
    markdown: string;

}

export function SafeMarkDown({ markdown }: SafeMarkDown) {
    return (
        <ReactMarkdown 
            rehypePlugins={[rehypeSanitize]} 
            remarkPlugins={[remarkGfm]}>
            {markdown}
        </ReactMarkdown>
    );
}