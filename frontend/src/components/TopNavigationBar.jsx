import React from 'react';
import FavIcon from './FavIcon'; 
import FavBadge from './FavBadge';
import TopicList from './TopicList'; 
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favorites, topics }) => {
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={topics} />
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};


export default TopNavigationBar;