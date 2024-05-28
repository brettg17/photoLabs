import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeModal, photo, similarPhotos, favorites, toggleFavorite }) => {
  if (!photo) return null;

  const { user, urls, location, id } = photo;
  const isFavorite = favorites.some(fav => fav.id === id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
      <div className="photo-details-modal__fav-button">
            <PhotoFavButton
              photo={photo}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </div>
        <img
          className="photo-details-modal__image"
          src={urls.regular}
          alt={`Photo by ${user.username}`}
        />
        <div className="photo-details-modal__user-details">
          <img src={user.profile} alt={`${user.username}'s profile`} className="photo-details-modal__user-profile" />
          <div className="photo-details-modal__user-info">
            <p className="photo-details-modal__username">{user.username}</p>
            {location && (
              <p className="photo-details-modal__user-location">{location.city}, {location.country}</p>
            )}
          </div>
        </div>
        <div className="photo-details-modal__similar-photos">
          <h2>Similar Photos</h2>
          <PhotoList
            photos={similarPhotos}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;