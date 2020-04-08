import React from "react";
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import '@carbon/charts/styles/styles.scss';


const stackedBarData = {
  labels: ["Quantity", "Leads", "Sold", "Restocking", "Misc"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65000, 29123, 35213, 51213, 16932],
    },
    {
      label: "Dataset 2",
      data: [32432, 21312, 56456, 21312, 34234],
    },
    {
      label: "Dataset 3",
      data: [12312, 23232, 34232, 12312, 34234],
    },
  ],
};
const stackedBarOptions = {
  title: "Stacked bar (discrete)",
  axes: {
    left: {
      primary: true,
      stacked: true,
    },
    bottom: {
      scaleType: "labels",
      secondary: true,
    },
  },
  height: "400px",
};
class StackBar extends React.Component {
  state = {
    stackedBarData,
  };
  render() {
    return (
        <StackedBarChart
          data={this.state.stackedBarData}
          options={stackedBarOptions}
        />
    );
  }
}

export default StackBar;