import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const StockChart = () => {
  const [hoverData, setHoverData] = useState(null);
  const [options, setOptions] = useState({
    title: {
      text: 'Stock Chart',
    },
    xAxis: {
      categories: ['A', 'B', 'C'],
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
          },
        },
      },
    },
    rangeSelector: {
      selected: 1,
    },
    series: [
      {
        name: 'Stock Price',
        data: [1, 34, 54],
      },
    ],
  });

  const updateSeries = () => {
    setOptions({
      ...options,
      series: [
        {
          name: 'Stock Price',
          data: [
            Math.ceil(Math.random() * 15 + 1),
            Math.ceil(Math.random() * 35 + 1),
            Math.ceil(Math.random() * 75 + 1),
          ],
        },
      ],
    });
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
      />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </>
  );
};

export default StockChart;
