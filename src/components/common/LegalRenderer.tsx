import ReactMarkdown from 'react-markdown';

interface LegalRendererProps {
  content: string;
}

export default function LegalRenderer({ content }: LegalRendererProps) {
  return (
    <div className="prose prose-stone prose-sm max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-brand-700 prose-a:underline">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
