import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__image" />
        <div className="photo-info">
          <p className="username">{username}</p>
          <p className="location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
