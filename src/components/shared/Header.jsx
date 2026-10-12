import Image from 'next/image';
import React from 'react';
import img from '@/assets/logo.png'
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center'>
            <Image src={img} height={200} width={300} alt='logo' className='mx-auto py-3'></Image>
            <p className='py-3'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE MMM dd yyyy")}</p>
        </div>
    );
};

export default Header;