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

//reducer function to hadnle state
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

// custom hook to manage application data and side effects
export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => { 
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => console.error("Fetching photos failed:", error));

    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => console.error("Fetching topics failed:", error));
  }, []);

  //fetch photos from a specific topic
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => console.error("Fetching photos by topic failed:", error));
  };

  //open photo details in modal
  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };
 //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  //toggle favourite status of photo
  const toggleFavorite = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photo });
  };
  //filter photo based on topic
  const similarPhotos = state.selectedPhoto ? state.selectedPhoto.similar_photos : [];

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    photoData: state.photoData,
    topicData: state.topicData,
    openModal,
    closeModal,
    toggleFavorite,
    similarPhotos,
    fetchPhotosByTopic
  };
}