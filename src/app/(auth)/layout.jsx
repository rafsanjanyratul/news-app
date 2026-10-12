import Nav from '@/components/shared/Nav';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Nav></Nav>
            {children}
        </div>
    );
};

export default AuthLayout;