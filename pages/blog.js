import React from "react";
import { Link } from "next/link";
import { Layout } from "@/components";
import { getAllPosts } from "@/helpers";

const Blog = ({ allPosts }) => {
  //   console.log("Posts: ", allPosts);
  const heroPost = allPosts[0];
  const title = heroPost.title;
  console.log("HeroPost: ", title);
  const posts = allPosts.slice(1);

  return (
    <Layout>
      <section className="min-h-screen py-24">
        <h1>Blog</h1>
        {posts.map(({ title, slug, date }) => (
          <div key={slug} className="mb-8 bg-gray-300 shadow-lg rounder-md">
            {/* {console.log("Title: ", title)} */}
            <p>{title}</p>
            {/* <Link href={`/blog/${heroPost.slug}`}>
            <a className="text-3xl font-bold">{heroPost.title}</a>
          </Link> */}
            <p>{date}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
  ]);

  return {
    props: { allPosts },
  };
};
