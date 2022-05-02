import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types';
import * as actions from '../actions/routeAction';
import arrayConversion from '../../utils/arrayConversion';

function* getRoutePolyline(action) {
  const { payload } = action;
  yield put(actions.getRouteLoading());
  try {
    const newRoute = yield call(
      axios.get,
      `http://router.project-osrm.org/route/v1/driving/${arrayConversion(
        payload
      )}?geometries=geojson`
    );
    if (newRoute.data.code === 'Ok') {
      const data = newRoute.data.routes[0].geometry.coordinates;
      const newData = data.map((item) => item.reverse());
      yield put(actions.getRouteSuccess({ payload, newData }));
    }
  } catch (error) {
    yield put(actions.getRouteError(error));
  }
}

export default function* routeSaga() {
  yield takeEvery(types.GET_ROUTE_SAGA, getRoutePolyline);
}
