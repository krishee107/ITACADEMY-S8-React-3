import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Starships from '../pages/Starships/Starships';
import Ship from '../components/Ship/Ship';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/starships/" element={<Starships />} />
            <Route path="/starships/:id" element={<Ship />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;