import React from "react";
import Image from "next/image";
import Link from "next/link";

const styles = {
  card: "flex group mb-10 w-full px-8 pt-6 pb-10 bg-white rounded-lg shadow-md border-4 border-transparent hover:border-primary transition duration-1000 ease-in-out",
  dateAuthor: "mb-2 text-2xl",
  title: "mb-4 text-5xl font-bold text-secondary leading-snug",
  text: "mb-10 text-3xl transition duration-1500 ease leading-relaxed",
};

export const HeroPost = ({
  title,
  author,
  date,
  excerpt,
  link,
  coverImage,
}) => {
  return (
    <div className={styles.card}>
      <div className="w-2/3">
        <p className={styles.dateAuthor}>
          {date} by <strong className="text-primary">{author}</strong>
        </p>
        <h2 className={styles.title}>{title}</h2>
        <Image
          src="/images/zigzag.svg"
          className="mb-4"
          alt="zig_zag image"
          width={100}
          height={20}
        />
        <p className={styles.text}>{excerpt}</p>
        <Link href={`/blog/${link}`} passHref>
          <a className="my-auto btn btn-primary">Read the post</a>
        </Link>
      </div>
      <div className="relative w-1/4 mx-auto">
        <Image
          src={coverImage}
          className="mb-4"
          alt="Cove Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
