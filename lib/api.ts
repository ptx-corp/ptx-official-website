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
  content: string; // This will now be HTML
}

export function getProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
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

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return getProjectBySlug(slug);
  }));

  // Sort projects by date in descending order
  return allProjectsData.sort((project1, project2) =>
    compareDesc(new Date(project1.frontmatter.date), new Date(project2.frontmatter.date))
  );
}
