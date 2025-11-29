import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), "_projects");

export interface Project {
  slug: string;
  frontmatter: {
    [key: string]: any;
    date: string;
  };
  content: string;
}

export interface LocalizedProject {
  en: Project;
  th: Project;
}

export function getProjectSlugs() {
  // Read from 'en' as the source of truth for slugs
  const enDir = path.join(projectsDirectory, 'en');
  if (!fs.existsSync(enDir)) return [];

  const fileNames = fs.readdirSync(enDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

async function parseProjectFile(filePath: string, slug: string): Promise<Project> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter: {
      ...data,
      date: data.date.toString(),
    },
    content: contentHtml,
  };
}

export async function getProjectBySlug(slug: string): Promise<LocalizedProject> {
  const enPath = path.join(projectsDirectory, 'en', `${slug}.md`);
  const thPath = path.join(projectsDirectory, 'th', `${slug}.md`);

  // We assume EN always exists. TH might not, but for now we copied them so they do.
  // In production, we might want a fallback if TH is missing.

  const enProject = await parseProjectFile(enPath, slug);

  let thProject: Project;
  try {
    thProject = await parseProjectFile(thPath, slug);
  } catch (e) {
    // Fallback to EN if TH is missing
    thProject = { ...enProject };
  }

  return {
    en: enProject,
    th: thProject
  };
}

export async function getAllProjects(): Promise<{ en: Project[], th: Project[] }> {
  const enDir = path.join(projectsDirectory, 'en');
  if (!fs.existsSync(enDir)) return { en: [], th: [] };

  const fileNames = fs.readdirSync(enDir);

  const allProjects = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return getProjectBySlug(slug);
  }));

  const sortProjects = (projects: Project[]) => {
    return projects.sort((project1, project2) => {
      if (project1.frontmatter.featured && !project2.frontmatter.featured) return -1;
      if (!project1.frontmatter.featured && project2.frontmatter.featured) return 1;
      return compareDesc(new Date(project1.frontmatter.date), new Date(project2.frontmatter.date));
    });
  };

  return {
    en: sortProjects(allProjects.map(p => p.en)),
    th: sortProjects(allProjects.map(p => p.th))
  };
}
