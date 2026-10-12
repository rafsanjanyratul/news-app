import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';

const NewsCart = ({news}) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm border border-gray-200">
      <div className="card-body p-4">
        <div className="flex items-center gap-3">
          <Image
            src={news.author?.img}
            alt={news.author?.name || "Author"}
            width={30}
            height={30}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm">
              {news.author?.name || "Unknown Author"}
            </h3>

            <p className="text-xs text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>

        <h2 className="card-title text-lg mt-2">
          {news.title}
        </h2>

        <figure>
          <Image
            src={news.thumbnail_url}
            alt={news.title}
            width={1000}
            height={48}
            className="object-cover rounded-md"
          />
        </figure>

        <p className="text-sm text-gray-500 line-clamp-3">
          {news.details}
        </p>

        <Link href={`/news/${news.category_id}`}>
        <button className="btn btn-link btn-sm justify-start p-0 text-orange-500 no-underline">
          Read More
        </button>
        </Link>

        <div className="flex justify-between items-center border-t pt-3 mt-2">
          <div className="flex items-center gap-2">
            <span className="text-orange-400">
              {"★".repeat(Math.round(news.rating?.number || 0))}
            </span>

            <span className="text-sm text-gray-500">
              {news.rating?.number ?? 0}
            </span>
          </div>

          <div className='flex item-center text-lg gap-2'>
            <FaEye />
            <p className="text-sm text-gray-500">
             {news.total_view ?? 0}
          </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewsCart;