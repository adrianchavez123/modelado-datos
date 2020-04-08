import React from 'react';
import DonutChart from '../../components/DonutChart/Donut';
import SphereChart from '../../components/SphereChart/SphereChart';
import CloudChart from '../../components/CloudChart/CloudChart';
const metrics = () => {
  return(
    <div style={{display:"grid",justifyItems:'center',width:'100%'}}>
      <a id="metrics"></a>
      <h1>Metricas</h1>
      <SphereChart/>
      <CloudChart/>
      <DonutChart/>
    </div>
  );
}

export default metrics;