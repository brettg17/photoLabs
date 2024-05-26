import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos'; 
import topics from '../mocks/topics'; 
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === photo.id)) {
        return prevFavorites.filter(fav => fav.id !== photo.id);
      } else {
        return [...prevFavorites, photo];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar favorites={favorites} topics={topics} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;