import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-image" />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-image" />
        <div className="photo-info">
          <p className="username">{username}</p>
          <p className="location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
