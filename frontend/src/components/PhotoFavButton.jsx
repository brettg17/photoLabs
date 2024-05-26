import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorite, onClick }) {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;