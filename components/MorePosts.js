import React from "react";
import Image from "next/image";
import Link from "next/link";

const styles = {
  card: "flex group w-full px-8 pt-6 pb-10 bg-white rounded-md shadow-md border-4 border-transparent hover:border-primary transition duration-1000 ease-in-out",
  dateAuthor: "mb-2 text-2xl",
  title: "mb-4 text-5xl font-bold text-secondary leading-snug",
  text: "mb-10 text-3xl transition duration-1500 ease leading-relaxed",
};

export const MorePosts = ({ posts }) => {
  return (
    <div className="relative grid grid-cols-4 mb-64 md:grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-10">
      {posts.map(({ title, slug, date, coverImage }) => (
        <div key={title} className="col-span-4 mb-10">
          <div className=" group">
            <Link as={`/blog/${slug}`} href={`/blog/${slug}`} passHref>
              <a>
                <div className="relative w-full h-[600px] rounded-lg aspect-h-4 aspect-w-3 group-hover:ring-4 group-hover:ring-primary transition duration-1000 ease-in-out">
                  <Image
                    src={coverImage}
                    className="object-cover object-center focus-ring max-h-[600px]  rounded-lg"
                    alt="Cove Image"
                    layout="fill"
                  />
                </div>
                <div className="px-4 mt-6 text-xl font-medium text-primary">
                  {date}
                </div>
                <div className="p-4 text-2xl font-bold text-secondary md:text-3xl dark:text-white">
                  {title}
                </div>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
