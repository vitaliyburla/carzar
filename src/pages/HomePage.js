import React from 'react';
import Header from '../components/Header';
import Benefits from '../components/homepage/Benefits';
import Search from '../components/homepage/Search';
import NewArrivals from '../components/homepage/NewArrivals';
import '../scss/home_page.css';

import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Benefits />
            <Search />
            <NewArrivals />
            <Footer />
        </>
    );
};

export default HomePage;
