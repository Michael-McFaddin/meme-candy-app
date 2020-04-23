import React from 'react';
import "../App.css";
import MemeGenerator from '../MemeGenerator';
import Footer from './Footer'

function Home() {
  return (
      <div>
        <h1>Hello Home</h1>
        <MemeGenerator />
        <Footer />
      </div>
    )
}
 
export default Home;