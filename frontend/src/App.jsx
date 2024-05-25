import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';

const App = () => (
  <div className="App">
    <TopNavigationBar />
    <PhotoList />
  </div>
);

export default App;