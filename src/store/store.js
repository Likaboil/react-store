import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/reducer';
import BookstoreService from '../api';

const bookstoreService = new BookstoreService();

// custom middleware to show action type in console
const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(bookstoreService),
      logMiddleware
    )
  )
);

export default store;
