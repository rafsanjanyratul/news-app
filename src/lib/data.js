export const getCategory =async ()=>{
  const res = await fetch("http://localhost:3000/newsCategory.json");
  const data= await res.json()
  return data.data
}
export const getNewsByCategory =async (category_id)=>{
  const res = await fetch("http://localhost:3000/AllNewsByCategoryId.json");
  const data= await res.json()
  if (Number(category_id) === 0) {
    return data;
  }
  if(Number(category_id===1)){
    return data.slice(3,8)
  }
  return data.filter(news=>news.category_id===category_id)
}
