import React, { Fragment } from 'react';
import BasicChart from './components/BasicChart';
import StockChart from './components/StockChart';

const App = () => {
  return (
    <Fragment>
      <BasicChart />
      <StockChart />
    </Fragment>
  );
};

export default App;
