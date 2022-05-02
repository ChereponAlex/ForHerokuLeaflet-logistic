import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  route: {
    loading: false,
    error: null,
    selectedRoute: null,
    coordinates: [],
  },
};

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
