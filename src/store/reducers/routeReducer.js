import * as types from '../types';

export default function todoReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.LOADING: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.GET_ROUTE_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.selectedRoute = payload.payload;
      newState.coordinates = payload.newData;
      return newState;
    }

    case types.ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    default: {
      return state;
    }
  }
}
