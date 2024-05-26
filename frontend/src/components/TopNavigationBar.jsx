import React from 'react';
import FavIcon from './FavIcon'; 
import TopicList from './TopicList'; 
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favorites, topics }) => {
  const hasFavorites = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={topics} />
      </div>
      <FavIcon selected={hasFavorites} displayAlert={hasFavorites} />
    </div>
  );
};

export default TopNavigationBar;