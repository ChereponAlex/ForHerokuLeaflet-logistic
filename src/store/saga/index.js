// root saga нужна для того, чтобы объединить саги и подключить к редаксу
import { all } from 'redux-saga/effects';
import routeSaga from './routeSaga';

// принмает массив генераторов и запускает их
export default function* rootSaga() {
  yield all([routeSaga()]);
}
