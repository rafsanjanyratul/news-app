import LeftSideBar from "@/components/homepage/LeftSideBar";
import RightSideBar from "@/components/homepage/RightSideBar";

import Image from "next/image";


const getCategory =async ()=>{
  const res = await fetch("http://localhost:3000/newsCategory.json");
  const data= await res.json()
  return data.data
}
const getNewsByCategory =async (category_id)=>{
  const res = await fetch("http://localhost:3000/AllNewsByCategoryId.json");
  const data= await res.json()
  return data.filter(news=>news.category_id===category_id)
}
export default async function Home() {
  const getNews = await getCategory()
  console.log(getNews.newsCategory)
  const getNewsByCategoryId = await getNewsByCategory(2)
  console.log(getNewsByCategoryId)
  return (
   <div className="grid grid-cols-12 w-full max-w-6xl mx-auto">
    <div className="col-span-3">
      <LeftSideBar getNews={getNews} isActive={5}></LeftSideBar>
    </div>
    <div className="col-span-6">
<h2 className="text-center mb-3">All news</h2>
<div className="space-y-4 mx-2">
  {
    getNewsByCategoryId.map(news=><div key={news.id} className="bg-gray-200 p-2 rounded-md p-6">{news.title}</div>)
  }
</div>
    </div>
    <div className="col-span-3">
      <RightSideBar></RightSideBar>
    </div>
   </div>
  );
}
