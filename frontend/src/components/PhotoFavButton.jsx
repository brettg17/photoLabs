import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


// renders the FavIcon as a button to toggle the favourite status of a photo
const PhotoFavButton = ({ photo, toggleFavorite, isFavorite }) => {
  const handleClick = () => {
    toggleFavorite(photo);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon selected={isFavorite}/>
    </div>
  );
};

export default PhotoFavButton;