import React from "react";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import '@carbon/charts/styles/styles.scss';

const barChartData = [
  {
    "group": "Qty",
    "value": 65000
  },
  {
    "group": "More",
    "value": 29123
  },
  {
    "group": "Sold",
    "value": 35213
  },
  {
    "group": "Restocking",
    "value": 51213
  },
  {
    "group": "Misc",
    "value": 16932
  }
];

const barChartOptions ={
  "title": "Simple bar (discrete)",
  "axes": {
    "left": {
      "mapsTo": "value"
    },
    "bottom": {
      "mapsTo": "group",
      "scaleType": "labels"
    }
  },
  "height": "400px"
};

class BarChart extends React.Component {
  state = {
    barChartData,
  };
  render() {
    return (
        <SimpleBarChart
          data={this.state.barChartData}
          options={barChartOptions}
        />
    );
  }
}

export default BarChart;