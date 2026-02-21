import { getAllWritings, getWritingBySlug } from "@/lib/writings";
import { notFound } from "next/navigation";
import  { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

type PageProps = { params: Promise<{slug:string}>};
export function generateStaticParams(){
    return getAllWritings().map((w)=>({slug:w.slug}));
}

export default async function WritingPage({params}:PageProps){
    const {slug} = await params;
    const doc = getWritingBySlug(slug);
    if(!doc)return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-16">
            <article className="prose prose-neutra dark:prose-invert max-w-3xlprose prose-neutral  max-w-3xl
        prose-headings:text-foreground prose-strong:text-foreground prose-em:text-foreground
        prose-p:text-foreground/90 prose-li:text-foreground/90 prose-a:text-foreground
        prose-blockquote:text-foreground/80 prose-blockquote:border-muted/60 prose-hr:border-muted/50
        prose-pre:bg-foreground/10 prose-pre:text-foreground prose-pre:rounded-lg prose-pre:p-4 prose-pre:shadow-none prose-pre:ring-1 prose-pre:ring-muted/50 prose-pre:overflow-x-auto prose-pre:font-mono">
            <p className="font-display text-4xl">{doc.meta.title} </p>
            {doc.meta.description ?(
                <p className="text-muted">{doc.meta.description}</p>
            ):null}
            <MDXRemote
            source={doc.content}
            options={{
                mdxOptions:{
                    remarkPlugins:[remarkGfm],
                    rehypePlugins:[[rehypePrettyCode, {theme: "github-light",keepbackground:false}]],


                },
            }}
            />
            </article>
        </main>
    )
}