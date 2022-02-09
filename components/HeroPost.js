import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tags } from "@/components";

const styles = {
  wrapper:
    "py-12 mx-auto sm:max-w-xl md:max-w-screen-xl md:px-24 lg:px-8 lg:py-16",
  card: "flex flex-col overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto transition duration-1000 ease-in-out",
  dateAuthor: "mb-2 text-2xl",
  title: "mb-4 text-5xl font-bold text-secondary leading-snug",
  text: "mb-10 text-3xl transition duration-1500 ease leading-relaxed",
};

export const HeroPost = ({ post }) => {
  const {
    slug,
    meta: { coverImage, altImage, tags, title, excerpt },
  } = post;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className="relative lg:w-1/3">
          <Image
            src={coverImage}
            alt={altImage}
            className="object-cover w-full lg:absolute h-80 lg:h-full"
            layout="fill"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-2/3">
          <Tags tags={tags} />
          <h5 className={styles.title}>{title}</h5>
          <p className="py-5 mb-5 text-3xl leading-relaxed text-gray-800">
            {excerpt}
          </p>
          <div className="flex items-center justify-end">
            <Link href={`/blog/${slug}`} passHref>
              <a className="my-auto btn btn-primary">Read the post</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
