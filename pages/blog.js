import React from "react";
import { Link } from "next/link";
import { Image } from "next/image";
import { Layout, HeroPost, MorePosts, Section, Container } from "@/components";
import { getAllPosts } from "@/helpers";

const Blog = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(morePosts);

  return (
    <Layout>
      <Section>
        <Container>
          <h1>Blog</h1>
          <HeroPost
            title={heroPost.title}
            author={heroPost.author}
            date={heroPost.date}
            excerpt={heroPost.excerpt}
            link={heroPost.slug}
            coverImage={heroPost.coverImage}
          />
          <MorePosts posts={morePosts} />
        </Container>
      </Section>
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
