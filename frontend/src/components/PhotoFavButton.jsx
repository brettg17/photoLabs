import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(true);

  const toggleSelected = () => {
    setSelected(prevSelected => !prevSelected);
    setDisplayAlert(false); 
  };
  

  return (
    <div className="photo-list__fav-icon" onClick={toggleSelected}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={displayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;