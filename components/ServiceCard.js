import React from 'react';
import Image from 'next/image';

export const ServiceCard = ({card}) => {
    return (
      <div className="relative flex flex-col w-full overflow-hidden bg-white rounded shadow-lg lg:w-1/3">
        <Image
          className="w-full rounded shadow-md"
          src={card.img.path}
          alt={card.img.alt}
 
          placeholder="https://via.placeholder.com/300x250"
          objectFit="cover"
          width={300}
          height={300}
        />
        <div className="h-full px-6 py-4">
          <div className="mb-2 text-xl font-bold text-primary">
            {card.title}
          </div>
          <p className="text-lg leading-relaxed text-secondary">
            {card.content}
          </p>
        </div>
        <button className="inline-flex items-center w-full px-4 py-2 font-bold bg-gray-200 rounded text-secondary hover:bg-primary hover:text-gray-100">
          <svg
            className="w-4 h-4 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Read more...</span>
        </button>
      </div>
    );
}

