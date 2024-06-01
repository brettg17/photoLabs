import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';


//displays favourite badge. if there are favourited photos it will display and icon in navbar.
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist}/>

    </div>
  ) 
};

export default FavBadge;