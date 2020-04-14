import React,{ Component } from 'react';
import * as geo from 'd3-geo-projection';
import * as d3 from 'd3';
import './MapChart.css';
class MapChart extends Component {
  state = {
    topo: null,
    capitals : null,
  }
  anchor = React.createRef();
  componentWillMount(){
    const files = ["./assets/world.geojson", "./assets/totales.csv"];
    const promises = [d3.json(files[0]), d3.csv(files[1])];
    const that = this;
    Promise.all(promises).then(function(values) {
      const [topo,data] = values;
      const {features} = topo;
      features.forEach(f => {f.total = 0});
      data.forEach( d => {
        let x = features.findIndex( field => field.id === d.codigo);
        if(x !== -1){
          features[x].total = parseInt(d.total);
        }
      });
      that.setState({topo,data});
    });
  }

  componentDidUpdate(){
    const svg = d3.select(this.anchor.current)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 500")
    .classed("svg-content", true)
    .call(d3.zoom().on("zoom", function () {
      svg.attr("transform", d3.event.transform)
    }))
    .append("g");
    d3.select('.svg-container').append('h1').text("MODELADO DE DATOS")
    .style('font-size', '3.75rem')
    .style('color', 'white')
    .style('display', 'inline-block')
    .style('position', 'absolute')
    .style('top', '0')
    .style('z-index', '100')
    .style('left', '10%');

    d3.select('.svg-container').append('h1').text("BECAS MOVILIDAD 2018")
    .style('font-size', '3rem')
    .style('color', 'white')
    .style('display', 'inline-block')
    .style('position', 'absolute')
    .style('z-index', '100')
    .style('top', '30%')
    .style('left', '10%');

    d3.select('.svg-container').append('a').text("ARTICULOS")
    .attr('href', '#posts')
    .style('top', '35%')
    .classed('svg-link',true);

    d3.select('.svg-container').append('a').text("DATASET")
    .attr('href', '#dataset')
    .style('top', '37%')
    .classed('svg-link',true);
    
    d3.select('.svg-container').append('a').text("METRICAS")
    .attr('href', '#metrics')
    .style('top', '39%')
    .classed('svg-link',true);

    const topo = this.state.topo, data = this.state.data
    const projection = d3.geoMercator()
    .scale(100)
    .center([0, 20]);
    
    const colorScale = d3.scaleThreshold()
    .domain([1, 10, 50, 100, 200, 1000])
    .range(d3.schemeBlues[8]);

    const mouseOver = d => {
      d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .5);
          
      d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black");
  
      d3.select('#name').text(d.properties.name);
      d3.select('#name2').text(d.id);
      d3.select('#name3').text(d.total);
      d3.select('#tooltip')
      .style('left', (d3.event.pageX + 5) + 'px')
      .style('top', (d3.event.pageY + 0) + 'px')
      .style('display', 'block')
      .style('opacity', 0.8)
      .on('mouseout', d => {
        d3.select('#tip').style('display', 'none');
      });
    }
    
    const mouseLeave = d => {
      d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .8);

      d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "transparent")
    }
        
    svg
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath().projection(projection))
    .attr("fill", d => colorScale(d.total || 0))
    .style("stroke", "transparent")
    .attr("class", d => "Country")
    .style("opacity", .8)
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave)
  }
  render(){
    return (
    <div style={{display:"grid",justifyItems:'center',position:'relative',width:'100vw'}}>
      <div id="container" className="svg-container">
        <svg ref={this.anchor} />
      </div>
      <div id="tooltip">
        <span id="name" className="info"></span>
        <span id="name2" className="info"></span>
        <span id="name3" className="info"></span>
      </div>
    </div>
    )
  }
}

export default MapChart;