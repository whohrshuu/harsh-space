import data from "@/app/list100.json"
type Item = { text: string, status: "todo" | "done" };


export default function List100() {
    const items = (data.list100 as Item[]) || [];
    const done = items.filter(i => i.status === "done").length;
    const total = items.length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    return (
        <main className="mx-auto max-w-3xl px-4 py-16 space-y-6">
            <h1 className="font-display text-4xl">
                List 100
            </h1>
            <p className="text-muted">
                Created on: feb 27, 2026
            </p>
            
        </main>
    )
}