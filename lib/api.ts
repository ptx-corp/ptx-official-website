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

const pressDirectory = path.join(process.cwd(), "_press");

export interface PressItem {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category: 'press' | 'award' | 'event' | 'partnership' | 'community' | 'media';
    pinned?: boolean;
    [key: string]: any;
  };
  content: string;
}

export interface LocalizedPressItem {
  en: PressItem;
  th: PressItem;
}

async function parsePressFile(filePath: string, slug: string): Promise<PressItem> {
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
    } as PressItem['frontmatter'],
    content: contentHtml,
  };
}

export function getPressSlugs() {
  const enDir = path.join(pressDirectory, 'en');
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

export async function getPressBySlug(slug: string): Promise<LocalizedPressItem> {
  const enPath = path.join(pressDirectory, 'en', `${slug}.md`);
  const thPath = path.join(pressDirectory, 'th', `${slug}.md`);

  const enPress = await parsePressFile(enPath, slug);

  let thPress: PressItem;
  try {
    thPress = await parsePressFile(thPath, slug);
  } catch (e) {
    thPress = { ...enPress };
  }

  return {
    en: enPress,
    th: thPress
  };
}

export async function getAllPress(): Promise<{ en: PressItem[], th: PressItem[] }> {
  const enDir = path.join(pressDirectory, 'en');
  if (!fs.existsSync(enDir)) return { en: [], th: [] };

  const fileNames = fs.readdirSync(enDir);

  const allPress = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return getPressBySlug(slug);
  }));

  const sortPress = (items: PressItem[]) => {
    return items.sort((a, b) => {
      if (a.frontmatter.pinned && !b.frontmatter.pinned) return -1;
      if (!a.frontmatter.pinned && b.frontmatter.pinned) return 1;
      return compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date));
    });
  };

  return {
    en: sortPress(allPress.map(p => p.en)),
    th: sortPress(allPress.map(p => p.th))
  };
}
