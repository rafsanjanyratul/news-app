import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Nav from '@/components/shared/Nav';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
            {children}
        </div>
    );
};

export default MainLayout;