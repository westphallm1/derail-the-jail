import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="Page">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
