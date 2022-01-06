import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { Layout, Section, Container, BlogNavigation, Post } from "@/components";
import { getPostBySlug, markdownToHtml, getAllPosts } from "@/helpers";

const BlogPost = ({ post, morePosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Section>
        <Container>
          <Head>
            <title>{post.title} | Gemprint Blog</title>
            <meta property="og:image" content={post.coverImage.url} />
          </Head>
          {router.isFallback ? <h3>Loading...</h3> : <Post post={post} />}
          {/* <BlogNavigation previous={""} next={""} /> */}
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "content",
    "excerpt",
    "date",
    "slug",
    "author",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
