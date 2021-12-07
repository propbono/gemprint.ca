import React from "react";
import { Link } from "next/link";
import { Layout, HeroPost } from "@/components";
import { getAllPosts } from "@/helpers";

const Blog = ({ allPosts }) => {
  const heroPost = allPosts[0];
  console.log("HeroLink", heroPost);
  const title = heroPost.title;
  const posts = allPosts.slice(1);

  return (
    <Layout>
      <section className="min-h-screen py-24">
        <div className="container px-4 mx-auto">
          <h1>Blog</h1>
          <HeroPost
            title={heroPost.title}
            author={heroPost.author}
            date={heroPost.date}
            excerpt={heroPost.excerpt}
            link={heroPost.slug}
            coverImage={heroPost.coverImage}
          />
          {/* {posts.map(({ title, slug, date }) => (
            <div key={slug} className="mb-8 bg-gray-300 shadow-lg rounder-md">
              <p>{title}</p>
              <Link href={`/blog/${heroPost.slug}`}>
                <a className="text-3xl font-bold">{heroPost.title}</a>
              </Link>
              <p>{date}</p>
            </div>
          ))} */}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "coverImage",
  ]);

  return {
    props: { allPosts },
  };
};
