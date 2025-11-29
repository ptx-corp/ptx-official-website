import { getAllProjects } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { ProjectsContent } from "@/components/ProjectsContent";

export const metadata = {
    title: 'Projects - PT X',
    description: 'Explore our portfolio of innovative projects and success stories.',
};

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <ProjectsContent projects={projects} />
        </div>
    );
}
