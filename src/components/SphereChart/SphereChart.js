import React,{ Component } from 'react';
import * as d3 from 'd3';
import './SphereChart.css';
class SphereChart extends Component {
  state = {
    data : []
  }
  cloud = React.createRef();
  cloudContainer = React.createRef();
  
  componentWillMount(){
    const files = ["./assets/totales.csv"];
    const promises = [ d3.csv(files[0])];
    const that = this;
    Promise.all(promises).then(function(values) {
      const [data] = values;
      that.setState({data});
    });
  }

  componentDidUpdate(){
    const height = 460, width = 960;
    const data = this.state.data;

    const svg = d3.select(this.cloud.current)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 500")
    .attr("height", height);

    var color = d3.scaleThreshold()
    .domain([1, 5, 10, 30, 100, 1000])
    .range(d3.schemePurples[8]);

    var size = d3.scaleLinear()
    .domain([0, 2000])
    .range([25,60]);

    var Tooltip = d3.select(this.cloudContainer.current)
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltipsphere")
    .style("background-color", "#002d9c")
    .style("border", "solid")
    .style("border-width", "10px")
    .style("border-radius", "15px")
    .style("padding", "15px")
    .style("position", "absolute")
    .style("top", "100px")
    .style("top", "400px")

    var mouseover = function(d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      Tooltip
      .html('<u>' + d.pais + '</u>' + "<br>" + d.total + " estudiantets")
      .style("left", (d3.mouse(this)[0]+20) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function(d) {
      Tooltip.style("opacity", 0)
    }

    var node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", function(d){ return size(d.total)})
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", d => color(d.total || 0))
    .style("fill-opacity", 0.8)
    .attr("stroke", "black")
    .style("stroke-width", 1)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
    .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));


    var simulation = d3.forceSimulation()
    .force("center", d3.forceCenter().x(width / 2).y(height / 2))
    .force("charge", d3.forceManyBody().strength(.1))
    .force("collide", d3.forceCollide().strength(.2).radius(function(d){ return (size(d.total)+3) }).iterations(1)) // Force that avoids circle overlapping

    simulation
    .nodes(data)
    .on("tick", function(d){
      node
      .attr("cx", function(d){ return d.x; })
      .attr("cy", function(d){ return d.y; })
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }
  }
  render(){
    return (
    <div style={{display:"grid",justifyItems:'center',width:'80%',height:'800px'}}>
      <div style={{justifySelf:'start',margin: '3rem 0'}}>
        <h3>Becas movilidad 2018 (cantidad estudiantes - paises)</h3>
      </div>
      <div ref={this.cloudContainer} className="svg-container" style={{height:'600px',position:'relative'}}>
        <svg ref={this.cloud} width='100%' height='500px'/>
      </div>
    </div>
    )
  }
}

export default SphereChart;