import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
);

export default App;