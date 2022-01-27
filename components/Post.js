import React from "react";
import Image from "next/image";
import { Tags } from "@/components";

export const Post = ({ post }) => {
  return (
    <article className="relative flex flex-col mx-auto prose-xl prose-a:text-primary hover:prose-a:text-secondary dark:prose-invert prose-gray max-w-7xl">
      <div className="relative object-cover w-full hidden sm:block sm:h-[250px] md:h-[300px] lg:h-[600px] aspect-w-4 aspect-h-3">
        <Image
          layout="fill"
          src={post.coverImage}
          alt=""
          className="hover:opacity-75"
        />
      </div>
      <div className="flex flex-col justify-start p-6">
        <div className="mb-4 text-center ">
          <Tags tags={post.tags} />
          <h1 className="my-4 text-5xl font-bold text-primary">{post.title}</h1>
          <p className="mb-8 text-sm">
            By{" "}
            <strong className="font-bold text-primary ">{post.author}</strong>,
            published on <strong>{post.date}</strong>
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </article>
  );
};
