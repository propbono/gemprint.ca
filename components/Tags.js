import React from "react";

export const Tags = ({ tags }) => {
  if (tags) {
    return (
      <div>
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-block px-4 py-1 mb-4 mr-2 text-xs font-bold tracking-wider uppercase bg-gray-100 rounded-full shadow-md text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  } else return null;
};
