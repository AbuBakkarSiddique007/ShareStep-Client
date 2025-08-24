import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ToastProvider from '../components/ToastProvider';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>
            <ToastProvider></ToastProvider>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default RootLayout;
