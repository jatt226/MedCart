import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Forgetpassword from './components/forgetpassword/Forgetpassword';

import {BrowserRouter , Switch, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
     
      
      <Switch>
        
        <Route path="/Shop" component={Shop}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Registration" component={Registration}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/Forgetpassword" component={Forgetpassword}/>
        <Route exact path="/Home" component={Home}/>
        <Route path="/" component={Home}/>
     </Switch>



      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
