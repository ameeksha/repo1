const initialState = {
  loading: false,
  albums: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ALBUMS_SUCCESS':
      return {
        loading: false,
        albums: action.payload,
        error: ''
      }
    case 'FETCH_ALBUMS_FAILURE':
      return {
        loading: false,
        albums: [],
        error: action.payload
      }
    case "ADD_ALBUM":
      const albums = state.albums.concat(action.payload);
      return { ...state, albums };
    default: return state
  }
}

export default reducer