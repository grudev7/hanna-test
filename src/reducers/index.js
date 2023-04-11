import C from '../C';

const initialState = {
  financialData: [],
  flag: false,
  error: ''
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_DATA_START:
      return { ...state, loading: true };

    case C.ADD_DATA_SUCCESS:
      return { ...state, financialData: action.payload };

    case C.LOAD_DATA_ERROR:
      return { ...state, error: action.error, loading: false };

    case C.DELETE_DATA_SUCCESS:
      return { ...state, financialData: action.payload };

    case C.VALIDATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default card;



