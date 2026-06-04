import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="section-heading mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => <p className="p-text">{children}</p>,
  ul: ({ children }) => <ul className="section-list mb-6">{children}</ul>,
  ol: ({ children }) => (
    <ol className="section-list list-decimal mb-6">{children}</ol>
  ),
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#fccc7e] bg-[#2b1b0e]/40 pl-4 py-2 my-4 italic">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="example-box overflow-x-auto text-sm md:text-base mb-6">
      {children}
    </pre>
  ),
  code: ({ className, children }) => {
    const isBlock = Boolean(className);
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="bg-[#2b1b0e]/50 px-1.5 py-0.5 rounded text-[#fccc7e]">
        {children}
      </code>
    );
  },
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="my-4 max-w-full rounded border border-[#e2d1c1]/30"
    />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm md:text-base">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-[#e2d1c1]/40 bg-[#2b1b0e]/60 px-3 py-2 text-left">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[#e2d1c1]/40 px-3 py-2">{children}</td>
  ),
  hr: () => <hr className="my-8 border-t-2 border-[#e2d1c1]/40" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#fccc7e] underline hover:text-[#ffdda7]"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

type MarkdownNotesProps = {
  content: string;
};

export function MarkdownNotes({ content }: MarkdownNotesProps) {
  return (
    <div className="course-content iot-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
