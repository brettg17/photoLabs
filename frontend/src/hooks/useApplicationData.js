import { useReducer, useEffect } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  photoData: [],
  topicData: []
};

const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(fav => fav.id !== action.payload.id)
          : [...state.favorites, action.payload]
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        console.log("Photo data", data); 
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => console.error("Fetching photos failed:", error));

    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        console.log("Topic data", data); 
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => console.error("Fetching topics failed:", error));
  }, []);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const toggleFavorite = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photo });
  };

  const similarPhotos = state.selectedPhoto
    ? state.photoData.filter(p => p.topic === state.selectedPhoto.topic && p.id !== state.selectedPhoto.id)
    : [];

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    photoData: state.photoData,
    topicData: state.topicData,
    openModal,
    closeModal,
    toggleFavorite,
    similarPhotos
  };
}