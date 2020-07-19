import React, { Fragment } from 'react'

import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import Pair from '../components/Pair';

function MainView() {
  return (
    <Fragment>
      <Header />
      <Pair />
      <BottomBar />
    </Fragment>
  );
}

export default MainView;