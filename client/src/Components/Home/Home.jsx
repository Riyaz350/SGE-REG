import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-blue-500 bg-opacity-50'>
            <Outlet/>
        </div>
    );
};

export default Home;