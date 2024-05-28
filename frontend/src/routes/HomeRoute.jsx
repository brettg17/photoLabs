import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, favorites, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favorites={favorites} topics={topics} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;