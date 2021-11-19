import React from 'react';
import Explore from '../../Explore/Explore/Explore';
import FindUs from '../../FindUs/FindUs';
import Footer from '../../Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import Upcomming from '../../Upcomming/Upcomming';
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <FindUs></FindUs>
            <Upcomming></Upcomming>
            <Footer></Footer>
        </div >
    );
};

export default Home;