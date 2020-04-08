import React,{ Component } from 'react';
import * as d3 from 'd3';
import * as d3cloud from 'd3-cloud';
import './CloudChart.css';

class CloudChart extends Component {
  word = React.createRef();

  componentDidMount(){
    console.log('componentDidUpdate');
    var myWords = [{ word: "FISICO MATEMATICAS Y CS. DE LA TIERRA", size: "216" }, { word: "BIOLOGIA Y QUIMICA", size: "376" }, { word: "MEDICINA Y CS. DE LA SALUD", size: "459" }, { word: "HUMANIDADES Y CS. DE LA CONDUCTA", size: "627" }, { word: "CIENCIAS SOCIALES", size: "1004" }, { word: "BIOTECNOLOGIA Y CS. AGROPECUARIAS", size: "369" },{ word: "INGENIERIAS", size: "697" }]

    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 950 - margin.left - margin.right,
      height = 950 - margin.top - margin.bottom;
      console.log('word');

    var svg = d3.select(this.word.current).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
  
    var layout = d3cloud()
      .size([width, height])
      .words(myWords.map(function (d) { return { text: d.word, size: Math.floor(parseInt(d.size)/10) }; }))
      .padding(5)
      .rotate(function () { return ~~(Math.random() * 2) * 90; })
      .fontSize(function (d) { return d.size; })
      .on("end", draw);
    layout.start();
  
    function draw(words) {
      svg
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function (d) { return d.size; })
        .style("fill", "#69b3a2")
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d) { return d.text; });
      }
  }
  render(){
    return (
    <div style={{display:"grid",justifyItems:'center',width:'80%',height:'500px',marginBottom:'3rem'}}>
      <div style={{justifySelf:'start',marginBottom: '3rem'}}>
        <h3>Areas de conocimiento</h3>
      </div>
      <svg ref={this.word} width='950' height='950'/>
    </div>
    )
  }
}

export default CloudChart;