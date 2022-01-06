import React from "react";
import Image from "next/image";

export const Post = ({ post }) => {
  return (
    <article className="relative flex flex-col mx-auto shadow max-w-7xl">
      <div className="relative object-cover w-full hidden sm:block sm:h-[250px] md:h-[300px] lg:h-[600px] aspect-w-4 aspect-h-3">
        <Image
          layout="fill"
          src={post.coverImage}
          alt=""
          className="hover:opacity-75"
        />
      </div>
      <div className="flex flex-col justify-start p-6 bg-white">
        <a href="#" className="pb-4 text-sm font-bold text-blue-700 uppercase">
          {post.tags}
        </a>
        <a href="#" className="pb-4 text-3xl font-bold hover:text-gray-700">
          {post.title}
        </a>
        <p className="pb-8 text-sm">
          By{" "}
          <a href="#" className="font-semibold hover:text-gray-800">
            {post.author}
          </a>
          , Published on {post.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </article>
  );
};
