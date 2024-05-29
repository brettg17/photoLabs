import { useReducer } from 'react';
import mockPhotoData from '../mocks/photos';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, selectedPhoto: null };
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(fav => fav.id !== action.payload.id)
          : [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleFavorite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  };

  const similarPhotos = state.selectedPhoto
    ? mockPhotoData.filter(p => p.topic === state.selectedPhoto.topic && p.id !== state.selectedPhoto.id)
    : [];

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    openModal,
    closeModal,
    toggleFavorite,
    similarPhotos
  };
}