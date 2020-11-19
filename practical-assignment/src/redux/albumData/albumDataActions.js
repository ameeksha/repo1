import axios from 'axios'

export const fetchPhotos = (props) => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest())
    axios
      .get(`/albums/${props}/photos`)
      .then(response => {
        const photos = response.data
        dispatch(fetchPhotosSuccess(photos))
      })
      .catch(error => {
        dispatch(fetchPhotosFailure(error.message))
      })
  }
}

export const fetchPhotosRequest = () => {
  return {
    type: 'FETCH_PHOTOS_REQUEST'
  }
}

export const fetchPhotosSuccess = photos => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: photos
  }
}

export const fetchPhotosFailure = error => {
  return {
    type: 'FETCH_PHOTOS_FAILURE',
    payload: error
  }
}

export const addPhoto = photoObj => {
  return (dispatch) => {
    axios.post('/photos', photoObj)
      .then(response => {
        dispatch({
          type: 'ADD_PHOTO',
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
}