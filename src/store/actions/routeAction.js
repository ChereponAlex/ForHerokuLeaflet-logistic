import * as types from '../types';

// get route
export const getRouteLoading = () => ({
  type: types.LOADING,
});

export const getRouteError = (payload) => ({
  type: types.ERROR,
  payload,
});

export const getRouteSuccess = (payload) => ({
  type: types.GET_ROUTE_SUCCESS,
  payload,
});

export const getRouteSaga = (payload) => ({
  type: types.GET_ROUTE_SAGA,
  payload,
});
// ---
