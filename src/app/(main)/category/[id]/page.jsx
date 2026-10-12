import LeftSideBar from '@/components/homepage/LeftSideBar';
import RightSideBar from '@/components/homepage/RightSideBar';
import { getCategory, getNewsByCategory } from '@/lib/data';
import React from 'react';


const CategoryNewsPage =async ({params}) => {
    const {id}=await params
    console.log( "params id", id)
    const getNews = await getCategory()
  const getNewsByCategoryId = await getNewsByCategory(Number(id))
  
    return (
        <div className="grid grid-cols-12 w-full max-w-6xl mx-auto">
    <div className="col-span-3">
      <LeftSideBar getNews={getNews} isActive={Number(id)}></LeftSideBar>
    </div>
    <div className="col-span-6">
<h2 className="text-center mb-3">All news</h2>
<div className="space-y-4 mx-2">
  {
    getNewsByCategoryId.length>0? getNewsByCategoryId.map(news=><div key={news.id} className="bg-gray-200 p-2 rounded-md p-6">{news.title}</div>):<h2 className='text-center text-3xl font-bold text-purple-500'>no news found</h2>
  }
</div>
    </div>
    <div className="col-span-3">
      <RightSideBar></RightSideBar>
    </div>
   </div>
    );
};

export default CategoryNewsPage;