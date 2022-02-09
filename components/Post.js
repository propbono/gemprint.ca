import React from "react";
import Image from "next/image";
import { Tags } from "@/components";

export const Post = ({ post }) => {
  const {
    content,
    meta: { coverImage, altImage, date, tags, title, author },
  } = post;

  return (
    <article className="relative flex flex-col mx-auto prose-xl prose-a:text-primary hover:prose-a:text-secondary dark:prose-invert prose-gray max-w-7xl">
      <div className="relative object-cover w-full hidden sm:block sm:h-[250px] md:h-[300px] lg:h-[600px] aspect-w-4 aspect-h-3">
        <Image
          layout="fill"
          src={coverImage}
          alt={altImage}
          className="rounded-xl hover:opacity-75"
        />
      </div>
      <div className="flex flex-col justify-start p-6">
        <div className="mb-4 text-center ">
          <Tags tags={tags} />
          <h1 className="my-4 text-5xl font-bold text-primary">{title}</h1>
          <p className="mb-8 text-sm">
            By <strong className="font-bold text-primary ">{author}</strong>,
            published on <strong>{date}</strong>
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </article>
  );
};
