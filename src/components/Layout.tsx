import React, { ReactNode } from 'react';
import '../index.css';

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='bg-dark-red h-screen'>
            {children}
        </div>
    );
};

export default Layout;
