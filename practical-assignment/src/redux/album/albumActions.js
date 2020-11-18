import axios from 'axios'

export const fetchAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest())
    axios
      .get('/albums')
      .then(response => {
        const albums = response.data
        dispatch(fetchAlbumsSuccess(albums))
      })
      .catch(error => {
        dispatch(fetchAlbumsFailure(error.message))
      })
  }
}

export const fetchAlbumsRequest = () => {
  return {
    type: 'FETCH_ALBUMS_REQUEST'
  }
}

export const fetchAlbumsSuccess = albums => {
  return {
    type: 'FETCH_ALBUMS_SUCCESS',
    payload: albums
  }
}

export const fetchAlbumsFailure = error => {
  return {
    type: 'FETCH_ALBUMS_FAILURE',
    payload: error
  }
}

export const addAlbum = albumObj => {
  return (dispatch) => {
    axios.post('/albums', albumObj)
      .then(response => {
        dispatch({
          type: 'ADD_ALBUM',
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
}