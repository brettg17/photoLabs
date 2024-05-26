import React from 'react';
import PhotoFavButton from './PhotoFavButton'; 
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFavorite, toggleFavorite, openModal }) => {
  const { id, user, urls, location } = photo;

  return (
    <li className="photo-list__item" key={id}>
      <img 
        src={urls.regular} 
        alt={`Photo by ${user.username}`} 
        className="photo-list__image" 
        onClick={() => openModal(photo)}
      />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
          <PhotoFavButton photo={photo} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;