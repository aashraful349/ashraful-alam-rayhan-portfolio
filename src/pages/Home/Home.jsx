import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div className=''>
            <title>Home: Md.Ashraful Alam Rayhan</title>
            <NavBar />
            <Banner></Banner>
            <Outlet />
        </div>
    );
};

export default Home;