import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Footer from './components/Footer';
import GetInvolved from './pages/GetInvolved';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="Page">
      <Header />

      <Switch>
        <Route path="/about_us" component={AboutUs} />
        <Route path="/resources" component={Resources} />
        <Route path="/get_involved" component={GetInvolved} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
