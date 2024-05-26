import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favorites, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          isFavorite={favorites.some(fav => fav.id === photo.id)}
          toggleFavorite={toggleFavorite} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;