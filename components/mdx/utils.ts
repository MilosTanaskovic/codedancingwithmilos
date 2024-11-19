import { Metadata } from "@/types/mdx";
import fs from "fs";
import path from "path";

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

/**
 * Content for the Blog Posts
 */

export function getJavaScriptBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content/blog/javascript"));
}

export function getReactBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content/blog/react"));
}

/**
 * Content for the Website Pages
 */
export function getHomePageContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/home"));
}

export function getJavaScriptEcosystemPageContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/home/javascript-ecosystem"));
}

export function getDotnetEcosystemPageContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/home/dotnet-ecosystem"));
}

export function getAboutPageContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/about"));
}

// Resume, About, Projects
export function getEducationContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/resume/education"));
}

export function getExperienceContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/resume/experience"));
}

export function getAwardsContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/resume/awards"));
}

export function getRecommendationsContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/resume/recommendations"));
}

export function getSkillsContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/resume/skills"));
}

export function getProjectsContent() {
  return getMDXData(path.join(process.cwd(), "content/pages/projects"));
}
