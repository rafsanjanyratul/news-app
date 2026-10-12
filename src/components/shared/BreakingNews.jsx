
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const newsList = [
  {
    id: 1,
    title: "Global Tech Summit 2026 Highlights Innovations in AI and Green Energy"
  },
  {
    id: 2,
    title: "Local Scientists Discover New Plant Species in Sundarbans Forest"
  },
  {
    id: 3,
    title: "Central Bank Announces New Monetary Policy to Curb Inflation"
  },
  {
    id: 4,
    title: "National Football Team Secures Victory in Thrilling Qualifier Match"
  },
  {
    id: 5,
    title: "Urban Renewal Project Transforms City Center into Eco-Friendly Zone"
  }
];
    return (
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 bg-gray-50 px-2 py-4">
            <button className='btn bg-red-500 text-white'>Latest</button>
            <Marquee pauseOnHover={true}>
{
    newsList.map(n=><span key={n.id}>{n.title}</span>)
}
            </Marquee>
        </div>
    );
};

export default BreakingNews;