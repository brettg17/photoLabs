import React, { useState } from 'react';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const toggleFavorite = (photo) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === photo.id)) {
        return prevFavorites.filter(fav => fav.id !== photo.id);
      } else {
        return [...prevFavorites, photo];
      }
    });
  };

  const similarPhotos = selectedPhoto
    ? mockPhotoData.filter(p => p.topic === selectedPhoto.topic && p.id !== selectedPhoto.id)
    : [];

  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData} openModal={openModal} favorites={favorites} toggleFavorite={toggleFavorite}/>
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