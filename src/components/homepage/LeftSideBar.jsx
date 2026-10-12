import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({getNews,isActive}) => {
    return (
        <div>
            <h2 className="text-center">All category</h2>
<ul>
  {
  getNews.newsCategory.map(news=><li key={news.id} className={`
  ${isActive === news.id &&"bg-slate-100"} rounded-md p-2 font-bold text-center text-md mt-2`}>
    <Link href={`/category/${news.id}`} className='block'>{news.name}</Link>
  </li>)
}
</ul>
        </div>
    );
};

export default LeftSideBar;