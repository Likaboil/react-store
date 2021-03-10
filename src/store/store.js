import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/reducer';

// custom middleware to show action type in console
const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logMiddleware
  )
);

export default store;
