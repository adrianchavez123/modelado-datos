import React from 'react';
import MapChart from '../../components/MapChart/MapChart';
import Posts from '../Posts/Posts';
import Metrics from '../Metrics/Metrics';
import DataSet from '../../components/DataSet/DataSet';
const content = props => {
  return(
  <div role="main" style={{ display:'grid',justifyItems:'center'}}>
    <MapChart/>
    <Posts/>
    <DataSet/>
    <Metrics/>
  </div>);
}

export default content;