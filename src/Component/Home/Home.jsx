/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='container mx-auto p-5 m-5'>
            <h1 className='text-2xl bg-purple-600 text-white rounded-lg p-5 text-center'>This is a Home Component</h1>
            <Header></Header>
            {
                navigation.state === "loading" ?
                <p className='text-center text-7xl font-bold text-black'>Loading....</p> :
                <Outlet></Outlet>
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;