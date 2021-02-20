const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
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
    case 'BOOKS_ADDED_TO_CART':
      const bookId = action.payload; //get id
      const book = state.books.find((book) => book.id === bookId); //find book by id

      const newItem = {
        id: bookId,
        title: book.title,
        count: 1,
        price: book.price,
        total: book.price,
      };

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ],
        orderTotal: (state.orderTotal + book.price)
      };

    default:
      return state;
  }
};

export default reducer;
