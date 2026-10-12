import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex text-center items-center justify-center h-[80vh] flex-col gap-2'>
            <p className='text-purple-500 font-bold text-3xl'>404 this page is not found</p>
            <Link href="/">
            <button className='btn bg-purple-500 text-white'>Go to home</button>
            </Link>
        </div>
    );
};

export default NotFound;