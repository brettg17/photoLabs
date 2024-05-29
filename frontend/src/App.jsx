import React, { useState } from 'react';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {isModalOpen,
    selectedPhoto,
    favorites,
    openModal,
    closeModal,
    toggleFavorite,
    similarPhotos,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
        openModal={openModal} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;