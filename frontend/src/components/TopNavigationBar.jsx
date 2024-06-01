import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList'; 
import '../styles/TopNavigationBar.scss';


//navbar for photolabs. includes photolabs logo, topics, and favourite icon
const TopNavigationBar = ({ favorites, topics, onTopicClick }) => {
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;