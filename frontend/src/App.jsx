import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photosArray = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => (
  <div className="App">
     {photosArray.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
  </div>
);

export default App;
