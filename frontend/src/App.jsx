import React from 'react';
import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

const App = () => (
  <div className="App">
    <HomeRoute photos={mockPhotoData} topics={mockTopicData}/>
  </div>
);

export default App;