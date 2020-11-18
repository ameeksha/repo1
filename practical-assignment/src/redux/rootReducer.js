import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import albumReducer from './album/albumReducer'
import photoReducer from './photo/photoReducer'

const rootReducer = combineReducers({

  user: userReducer,
  album: albumReducer,
  photo: photoReducer
})

export default rootReducer