import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer';
import Header from '../Componets/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;