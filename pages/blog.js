import React from "react";
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
          <HeroPost post={heroPost} />
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
    "excerpt",
    "date",
    "slug",
    "author",
    "coverImage",
    "altImage",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
