import React from 'react';
import Explore from '../../Explore/Explore/Explore';
import FindUs from '../../FindUs/FindUs';
import Footer from '../../Footer/Footer';
import Upcomming from '../../Upcomming/Upcomming';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import AddProducts from '../Products/AddProducts/AddProducts';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            {/* <AddProducts></AddProducts> */}
            <Products></Products>
            {/* <Explore></Explore> */}
            <Reviews></Reviews>
            <FindUs></FindUs>
            <Upcomming></Upcomming>
            <Footer></Footer>
        </div>
    );
};

export default Home;