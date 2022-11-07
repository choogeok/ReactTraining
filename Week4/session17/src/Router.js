import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./module/Navbar/Navbar";
import Home from './module/Home/Container/Home';
import Player from './module/About/Container/Player';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Player />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;