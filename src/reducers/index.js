const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: 'test-book 1',
      count: 3,
      price: 23,
      total: 69,
    },
    {
      id: 2,
      title: 'test-book 2',
      count: 1,
      price: 23,
      total: 23,
    }
  ],
  orderTotal: 173
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
