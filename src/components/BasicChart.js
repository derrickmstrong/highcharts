import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BasicChart = () => {
  const [options, setOptions] = useState({
    title: {
      text: 'Basic Chart',
    },
    series: [
      {
        data: [1, 2, 3, 7],
      },
    ],
  })

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BasicChart;
