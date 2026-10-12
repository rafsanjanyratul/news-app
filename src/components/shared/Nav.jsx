import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userLoginImg from "@/assets/user.png"
import NavLink from './NavLink';

const Nav = () => {
    return (
        <div className='flex justify-between max-w-6xl w-full mx-auto mb-10 mt-5'>
            <div>
            </div>
            
            <div>
                <ul className='flex gap-3'>
                    <li><NavLink href="/">home</NavLink></li>
                    <li><NavLink href="/about">about</NavLink></li>
                    <li><NavLink href="/career">career</NavLink></li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <Image src={userLoginImg} height={30} width={45} alt="user login image"></Image>
                <Link href="/login"><button className='btn bg-purple-500 text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Nav;