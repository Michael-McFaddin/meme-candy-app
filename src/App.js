import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import './App.css'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default App;
