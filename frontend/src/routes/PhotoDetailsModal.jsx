import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, photo }) => {
  if (photo) {
    console.log(photo);
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
