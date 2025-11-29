import { getProjectBySlug, getProjectSlugs } from "../../../lib/api";
import { notFound } from "next/navigation";
import ProjectDetail from "../../../components/ProjectDetail";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map(slug => ({
    slug: slug.params.slug
  }));
}

export default async function ProjectPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  try {
    const params = await paramsPromise;
    const project = await getProjectBySlug(params.slug);

    return <ProjectDetail project={project} />;
  } catch (e) {
    notFound();
  }
}