import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/posts");

/**
 * Reading the contents of the posts directory and returning an array of the file names.
 */
export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Get the post by slug and return the fields we want.
 */
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

/**
 * `getAllPosts` returns an array of all posts in the site.
 */
export function getAllPosts(fields = []) {
  const slugs = getPostFiles();
  console.log("Slugs:", slugs);
  return (
    slugs
      .map((slug) => getPostBySlug(slugs))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        new Date(post1.date) > new Date(post2.date) ? -1 : 1
      )
  );
}
