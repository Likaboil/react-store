import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers/reducer';

// custom middleware for store to respond
// to action which type may be string, not just an object

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === String) {
    return dispatch({
      type: action
    });
  };

  return dispatch(action);
};

// custom middleware to show action type in console
const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
};

// action to test thunkMiddleware
const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout( () => dispatch({
    type: 'DELAYED_ACTION'
  }),
  timeout );
};

const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      stringMiddleware, logMiddleware
    )
);

//add to test
store.dispatch(delayedActionCreator(2000));


export default store;
