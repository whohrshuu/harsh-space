import { getAllProjects } from "@/lib/projects"
import ProjectList from "./ProjectList";

export const metadata = {
    title: "Projects | Harsh's Space",
    description: "Projects, experiments and ideas I have built while learning and exploring technology.",
}



export default function ProjectIndex() {
    const projects = getAllProjects();

    return (
        <div className="mx-auto max-w-3xl px-4 py-16 space-y-8">
            <header className="space-y-2">
                <h1 className="font-display text-4xl md:text-5xl tracking-tight">
                    Projects
                </h1>
                <p className="text-muted">
    A collection of projects showcasing my skills in software development, problem solving and modern web technologies.
</p>
            </header>
            <ProjectList projects={projects} />
        </div>
    )
}




