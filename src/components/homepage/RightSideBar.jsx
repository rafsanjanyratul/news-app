import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='text-center mb-2'>Login With</h2>
            <div className='flex flex-col gap-2'>
             <button className='btn bg-blue-300'>
                <FaGoogle /> Login with google
             </button>
             <button className='btn'>
                <FaGithub /> Login with github
             </button>

            </div>
        </div>
    );
};

export default RightSideBar;