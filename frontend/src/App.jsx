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

  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={setIsModalOpen} photo={selectedPhoto}/>}
    </div>
  );
};

export default App;