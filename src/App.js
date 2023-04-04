//import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header';
import Banner from './components/partials/Banner';
import Productlist from './components/partials/Productlist';
import Footer from './components/partials/Footer';
import { useState } from 'react';

function App() {
  
const[state,setState]=useState([]);

const addToCart=(title)=>{

  setState([...state,title])
}

  return (
    <div className="App">
      
      <Header  state={state}/>
      <Banner/>
      <Productlist addToCart={addToCart}/>
      <Footer/>


      </div>
  );
}

export default App;
