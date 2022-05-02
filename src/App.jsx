import React from 'react';
import './global.module.scss';
import { useSelector } from 'react-redux';
import { Main } from './components/Main/Main';
// import { PageSpinner } from './components/loader/Loader';

function App() {
  // const { loading } = useSelector(
  //   (state) => state.route
  // );

  return (
    <div>
      {/* <PageSpinner countDown={800} httpRequestsPending={loading} /> */}
      <Main />
    </div>
  );
}

export default App;
