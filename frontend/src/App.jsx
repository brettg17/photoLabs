import React, { useState } from 'react';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const similarPhotos = selectedPhoto
    ? mockPhotoData.filter(p => p.topic === selectedPhoto.topic && p.id !== selectedPhoto.id)
    : [];

  console.log("Selected Photo:", selectedPhoto);
  console.log("Similar Photos:", similarPhotos);

  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData} openModal={openModal} />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
        />
      )}
    </div>
  );
};

export default App;