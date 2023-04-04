import React from 'react'
import { useState } from 'react';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import Productlist from '../partials/Productlist';
import Footer from '../partials/Footer';


const Home = () => {
    const[state,setState]=useState([]);

const addToCart=(title)=>{

  setState([...state,title])
}

  return (
    <div>
      <Header  state={state}/>
      <Banner/>
      <Productlist addToCart={addToCart}/>
      <Footer/>

    </div>
  )
}

export default Home