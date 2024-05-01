import { Outlet } from 'react-router-dom';
import '../index.css';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='flex h-full flex-col'>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
