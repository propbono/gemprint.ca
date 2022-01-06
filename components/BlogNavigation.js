import React from "react";
import Link from "next/link";

export const BlogNavigation = () => {
  return (
    <div className="flex w-full pt-6">
      <Link>
        <a
          href="#"
          className="w-1/2 p-6 text-left bg-white shadow hover:shadow-md"
        >
          <p className="flex items-center text-lg font-bold text-blue-800">
            <i className="pr-1 fas fa-arrow-left"></i> Previous
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </Link>
      <Link>
        <a
          href="#"
          className="w-1/2 p-6 text-right bg-white shadow hover:shadow-md"
        >
          <p className="flex items-center justify-end text-lg font-bold text-blue-800">
            Next <i className="pl-1 fas fa-arrow-right"></i>
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </Link>
    </div>
  );
};
