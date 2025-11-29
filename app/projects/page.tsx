import { getAllProjects } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { ProjectList } from "@/components/ProjectList";

export const metadata = {
    title: 'Projects - PT X',
    description: 'Explore our portfolio of innovative projects and success stories.',
};

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Our Projects
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300">
                        Discover how we've helped businesses transform and grow through technology.
                    </p>
                </div>

                <ProjectList initialProjects={projects} />
            </main>
        </div>
    );
}
