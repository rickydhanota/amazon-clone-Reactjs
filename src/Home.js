import React from 'react';
import './Home.css';
import "./Product.js";
import Product from './Product.js';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__container'>
                <img className = 'home__image' src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

                <div className = "home__row">
                    <Product 
                        id = "121212"
                        title = "Black Lives Matter Kindness is Everything Equality T-Shirt" 
                        price = {16.99} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/51ZtAgkoXsL._AC_UX385_.jpg" 
                        rating = {5} 
                    />

                    <Product
                        id = "232323"
                        title = "ApexDesk Vortex Series M Edition 48 Electric Height Adjustable Standing Desk (Memory Controller, 48 Rustic Grey Top)"
                        price = {399.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71KVfW6pyiL._AC_SL1500_.jpg"
                        rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product 
                        id = "343434"
                        title = "JOOFO Floor Lamp,30W/2400LM Sky LED Modern Torchiere 3 Color Temperatures Super Bright Floor Lamps-Tall Standing Pole Light with Remote & Touch Control for Living Room,Bed Room,Office（Black"
                        price = {59.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/61YMlJoEGNL._AC_SL1500_.jpg"
                        rating = {5}
                    />

                    <Product
                        id = "454545"
                        title = 'Mainstay 71" 5-Shelf Standard Bookcase (Black)'
                        price = {69.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71mQhYWDLmL._AC_SL1500_.jpg"
                        rating = {5}
                    />

                    <Product
                        id = "565656"
                        title = 'George Kittle San Francisco 49ers #85 Red Youth Home Mid Tier Jersey'
                        price = {49.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/61ZvBSsHIUL._AC_UX679_.jpg"
                        rating = {4}
                    />
                </div>

                <div className = "home__row">
                <Product 
                        id = "676767"
                        title = "Muhammad Ali Motivational Wall Art Poster"
                        price = {11.95}
                        image = "https://images-na.ssl-images-amazon.com/images/I/615smdBd8iL._AC_SL1024_.jpg"
                        rating = {5}
                    />

                    <Product
                        id = "787878"
                        title = 'Bruce Lee-“Pray for the Strength to Endure A Difficult Life” Motivational Quotes Wall Art -8 x 10" Mountain Sunset Print-Ready to Frame. Home-Office-School-Gym Decor. Great Sign for Motivation!'
                        price = {19.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81ZBfpXF1IL._SL1500_.jpg"
                        rating = {5}
                    />

                    <Product
                        id = "898989"
                        title = 'Kobe Bryant Poster 11” x 17” Mamba Mentality Wall Poster Basketball'
                        price = {24.95}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81Ma74QTCFL._AC_SL1500_.jpg"
                        rating = {5}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
