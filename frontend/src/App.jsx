import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    favorites,
    photoData,
    topicData,
    openModal,
    closeModal,
    toggleFavorite,
    similarPhotos,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData} 
        topics={topicData} 
        openModal={openModal} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
        fetchPhotosByTopic={fetchPhotosByTopic} // Pass the function
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