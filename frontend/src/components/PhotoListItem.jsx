import React from "react";
import PhotoFavButton from './PhotoFavButton'; 
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
          <PhotoFavButton />
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
