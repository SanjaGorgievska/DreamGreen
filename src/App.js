import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Naslovna from './components/dashboard/Naslovna'
import DetaliProekt from './components/projects/DetaliProekt'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import About from './components/zanas/About'
import KreirajProekt from './components/projects/KreirajProekt'
import Carousela from './components/dashboard/Carousela'
import Home from './components/doma/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Natasha Stojanova


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Naslovna} />
            <Route path='/project/:id' component={DetaliProekt} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/home' component={Carousela} />
            <Route path='/create' component={KreirajProekt} />
            <Route path='/zaNas' component={About} />
            <Route path='/promotions' component={Home} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }}

export default App;


