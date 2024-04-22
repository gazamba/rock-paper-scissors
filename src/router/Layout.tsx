import { Outlet } from 'react-router-dom';
import '../index.css';
import HeaderGame from '../components/HeaderGame';
import Footer from '../components/Footer';

const Layout: React.FC = () => {
    return (
    <div className='flex h-full flex-col'>

        <div className='mx-auto mt-32 max-w-[600px] flex-grow"'>
            <Outlet/>
        </div>

        <Footer/>
    </div>
    );
};

export default Layout;
