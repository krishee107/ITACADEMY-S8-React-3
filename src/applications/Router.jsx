import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Starships from '../pages/Starships/Starships';
import Ship from '../components/Ship/Ship';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/starships/" element={<Starships />} />
            <Route path="/starships/:id" element={<Ship />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;