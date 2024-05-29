import { useState } from 'react'
import mockPhotoData from '../mocks/photos';

export default function useApplicationData() {
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

    return {isModalOpen,
            selectedPhoto,
            favorites,
            openModal,
            closeModal,
            toggleFavorite,
            similarPhotos}
}