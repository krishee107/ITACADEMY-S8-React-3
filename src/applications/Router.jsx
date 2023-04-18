import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Starships from '../pages/Starships/Starships';
import Ship from '../components/Ship/Ship';
import { useState } from 'react';
import Pilot from '../components/Pilot/Pilot';
import Film from '../components/Film/Film';

const Router = () => {
    const [isAuth, setisAuth] = useState(() => {
        const storedAuth = localStorage.getItem("isAuth");
        return storedAuth ? JSON.parse(storedAuth) : false;
    });
    return (

        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route
                    path="/starships"
                    element={isAuth ? <Starships /> : <Navigate to="/" />}
                />
                <Route
                    path="/starships/:id"
                    element={isAuth ? <Ship /> : <Navigate to="/" />}
                />
                <Route
                    path="/pilot/:id"
                    element={isAuth ? <Pilot /> : <Navigate to="/" />}
                />
                <Route
                    path="/film/:id"
                    element={isAuth ? <Film /> : <Navigate to="/" />}
                />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    );
}



export default Router;