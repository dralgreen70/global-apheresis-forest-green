import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  content: string;
  contentHtml?: string;
}

/**
 * Returns all blog posts sorted by filename (newest first).
 * Parses YAML frontmatter from each .md file.
 */
export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      slug: data.slug,
      content,
    };
  });

  // Sort by filename descending (newest date first)
  posts.sort((a, b) => {
    const fileA = fileNames.find((f) => {
      const contents = fs.readFileSync(path.join(postsDirectory, f), "utf8");
      return matter(contents).data.slug === a.slug;
    }) || "";
    const fileB = fileNames.find((f) => {
      const contents = fs.readFileSync(path.join(postsDirectory, f), "utf8");
      return matter(contents).data.slug === b.slug;
    }) || "";
    return fileB.localeCompare(fileA);
  });

  return posts;
}

/**
 * Returns a single blog post by slug, with HTML-rendered content.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      const processedContent = await remark().use(html).process(content);

      return {
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        slug: data.slug,
        content,
        contentHtml: processedContent.toString(),
      };
    }
  }

  return null;
}

/**
 * Returns all slugs for static generation.
 */
export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.slug;
  });
}
