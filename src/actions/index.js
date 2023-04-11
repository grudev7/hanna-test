import C from '../C';
import api from '../api/api';

export function loadItems() {
  return async (dispatch) => {
    const response = await api.fetchData();
    dispatch({
      type: C.ADD_DATA_SUCCESS,
      payload: response,
    });
  }
}

export function deleteItem(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: C.DELETE_DATA_START });
      const response = await api.deleteData(id);
      if (response.data) {
        dispatch({
          type: C.DELETE_DATA_SUCCESS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: C.DELETE_DATA_FAIL,
        error: error || "Unexpected Error!",
      });
    }
  };
}

export function addItems(data) {
  return async (dispatch) => {
    try {
      dispatch({ type: C.ADD_DATA_START });
      const response = await api.addData(data);
      if (response.data) {
        dispatch({
          type: C.ADD_DATA_SUCCESS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: C.ADD_DATA_FAIL,
        error: error || "Unexpected Error!",
      });
    }
  };
};


export function validationError(erros) {
  return async (dispatch) => {
    dispatch({
      type: C.VALIDATION_ERROR,
      payload: erros,
    });
  };
};
