import React from "react";
import { BubbleChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import '@carbon/charts/styles/styles.scss';


const bubbleChartData = [
  {
    "group": "Dataset 1",
    "date": "2019-01-01T06:00:00.000Z",
    "value": 10000,
    "surplus": 136335672.92692482
  },
  {
    "group": "Dataset 1",
    "date": "2019-01-05T06:00:00.000Z",
    "value": 65000,
    "surplus": 581757880.3269308
  },
  {
    "group": "Dataset 1",
    "date": "2019-01-08T06:00:00.000Z",
    "value": null,
    "surplus": 16429.559793360655
  },
  {
    "group": "Dataset 1",
    "date": "2019-01-13T06:00:00.000Z",
    "value": 49213,
    "surplus": 955824481.757605
  },
  {
    "group": "Dataset 1",
    "date": "2019-01-17T06:00:00.000Z",
    "value": 51213,
    "surplus": 170064730.24626708
  },
  {
    "group": "Dataset 2",
    "date": "2019-01-02T06:00:00.000Z",
    "value": 0,
    "surplus": 1456.2961883202775
  },
  {
    "group": "Dataset 2",
    "date": "2019-01-06T06:00:00.000Z",
    "value": 57312,
    "surplus": 754461698.8498869
  },
  {
    "group": "Dataset 2",
    "date": "2019-01-08T06:00:00.000Z",
    "value": 27432,
    "surplus": 565038323.1242377
  },
  {
    "group": "Dataset 2",
    "date": "2019-01-15T06:00:00.000Z",
    "value": 70323,
    "surplus": 1458193517.9150324
  },
  {
    "group": "Dataset 2",
    "date": "2019-01-19T06:00:00.000Z",
    "value": 21300,
    "surplus": 326813905.0886166
  },
  {
    "group": "Dataset 3",
    "date": "2019-01-01T06:00:00.000Z",
    "value": 50000,
    "surplus": 967130595.4398837
  },
  {
    "group": "Dataset 3",
    "date": "2019-01-05T06:00:00.000Z",
    "value": null,
    "surplus": 12899.934862277029
  },
  {
    "group": "Dataset 3",
    "date": "2019-01-08T06:00:00.000Z",
    "value": 18000,
    "surplus": 278517089.7898659
  },
  {
    "group": "Dataset 3",
    "date": "2019-01-13T06:00:00.000Z",
    "value": 39213,
    "surplus": 934909013.1890504
  },
  {
    "group": "Dataset 3",
    "date": "2019-01-17T06:00:00.000Z",
    "value": 61213,
    "surplus": 1117626519.9000034
  },
  {
    "group": "Dataset 4",
    "date": "2019-01-02T06:00:00.000Z",
    "value": 20000,
    "surplus": 171635156.77878052
  },
  {
    "group": "Dataset 4",
    "date": "2019-01-06T06:00:00.000Z",
    "value": 37312,
    "surplus": 185887501.67059866
  },
  {
    "group": "Dataset 4",
    "date": "2019-01-08T06:00:00.000Z",
    "value": 51432,
    "surplus": 153511136.12895137
  },
  {
    "group": "Dataset 4",
    "date": "2019-01-15T06:00:00.000Z",
    "value": 25332,
    "surplus": 586277391.9241867
  },
  {
    "group": "Dataset 4",
    "date": "2019-01-19T06:00:00.000Z",
    "value": null,
    "surplus": 4235.07347223438
  }
];

const BubbleChartOptions= {
  "title": "Bubble (time series)",
  "axes": {
    "bottom": {
      "title": "2019 Annual Sales Figures",
      "scaleType": "time",
      "mapsTo": "date"
    },
    "left": {
      "mapsTo": "value"
    }
  },
  "bubble": {
    "radiusMapsTo": "surplus"
  },
  "height": "400px"
};
class Bubble extends React.Component {
  state = {
    bubbleChartData,
  };
  render() {
    return (
        <BubbleChart
          data={this.state.bubbleChartData}
          options={BubbleChartOptions}
        />
    );
  }
}

export default Bubble;