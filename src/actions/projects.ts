import path from "path";
import fs, { linkSync } from "fs";
import matter from "gray-matter";

const projectDirectory = path.join(process.cwd(), "projects");


interface Link {
    type:string,
    url : string
}

export interface Project{
    id: string,
    title:string,
    description:string,
    category:string,
    date:string,
    content?:string,
    tags:string[],
    links:Link[],
    thumbnail?:string 
}

export async function getProjects(){
    const fileNames = await fs.readdirSync(projectDirectory);

    return fileNames.map((fileName)=>{
        const fullPath  = path.join(projectDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const {data, content} = matter(fileContents);


        return {
            id: fileName.replace(/\.md$/,''),
            title: data.title,
            description: data.description  || 'No description provided',
            category: data.category  || 'No category',
            date: data.date  || 'No date'   ,
            tags: data.tags || [],
            links: data.link || [],
            thumbnail: data.thumbnail || undefined,
            content

        };
    });
}

export async function getProjectById(id:string):Promise<Project >{
    const fullPath = path.join(projectDirectory, `{$id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const {data, content} = matter(fileContents);

    return {
        id,
        title: data.title || 'No title',
        description: data.description || 'No description provided',
        category: data.category || 'No category',
        date: data.date || 'No date',
        tags: data.tags || [],
        links: data.link || [],
        thumbnail: data.thumbnail || undefined,
        content
    };

}