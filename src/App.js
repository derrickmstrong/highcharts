import React, { Fragment } from 'react';
import BasicChart from './components/BasicChart';
import LineChart from './components/LineChart';

const App = () => {
  return (
    <Fragment>
      <BasicChart />
      <LineChart />
    </Fragment>
  );
};

export default App;
