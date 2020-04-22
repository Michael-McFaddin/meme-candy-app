// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default App;






