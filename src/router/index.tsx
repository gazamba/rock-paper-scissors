import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Game from '../pages/Game';
import Home from '../pages/Home';
import Layout from './Layout';
import { Play } from '../pages/Play';

const Router = () => {
        return(
                <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/play" element={<Play />} />
                        <Route path="/game" element={<Game />} />
                    </Route>
                    <Route path="*" element={<h1>404: Path not found</h1>} />
                </Routes>
            </BrowserRouter>
        );
}

 export default Router;
