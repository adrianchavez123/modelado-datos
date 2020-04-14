import React from "react";
import { DonutChart } from "@carbon/charts-react";
import '@carbon/charts/styles/styles.scss';
import './Donut.css';
const DonutChartData = [
  {
    "group": "Masculino",
    "value": 1807
  },
  {
    "group": "Femenino",
    "value": 1941
  },
];

const DonutChartOptions = {
  "title": "Grafica Genero",
  "resizable": true,
  "donut": {
    "center": {
      "label": "estudiantes 2018"
    }
  },
  "height": "400px",
  'background': 'white'
};
class Donut extends React.Component {
  state = {
    DonutChartData,
  };
  render() {
    return (
    <div style={{display:"grid",justifyItems:'center',width:'80%',marginTop:'500px'}}>
      <div style={{justifySelf:'start',marginBottom:'3rem'}}>
        <h3>Becas movilidad 2018 (genero estudiantes)</h3>
      </div>
      <div style={{background:'white', width:'100%'}}>
        <div  className="donut" style={{width:'420px',height:'420px',margin:'auto'}}>
        <DonutChart
          data={this.state.DonutChartData}
          options={DonutChartOptions}
        />
        </div>
      </div>
    </div>
    );
  }
}

export default Donut;