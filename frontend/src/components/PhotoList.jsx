import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favorites = [], toggleFavorite, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favorites.some(fav => fav.id === photo.id)}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;