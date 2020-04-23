// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react'
// import './App.css'
// import { BrowserRouter, Router, Switch } from 'react-router-dom'

// // import Navbar from './Navbar'
// // import Header from './Header'
// // import MemeGenerator from './MemeGenerator'
// // import Footer from './Footer'
// import Test from './Test'

// class App extends Component {
//   construct
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//             <Switch>
//               <Router path="/" component={Test}/>
//             </Switch>
          
//         </div>
//       </BrowserRouter>
//     );
//   }
  
// }

// export default App;





import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import MyPage from './components/MyPage';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/my-page" component={MyPage}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
